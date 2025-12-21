'use server';

import jsonData from '@/data/data-20251219223035.json';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateObject } from 'ai';
import fs from 'fs';
import path from 'path';
import { z } from 'zod';

const { promises: fsPromises } = fs;

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type JSONDATA = (typeof jsonData)[number];

// extract the content block type
export type ContentBlock = JSONDATA['content'][0];
// Local schema (to avoid importing content-collections during CLI runs)
export const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  image: z.string(),
  summary: z.string(),
  content: z.string(),
  categories: z.array(z.string()),
  author: z.string(),
  createdAt: z.string(),
});

// Raw data items are inferred directly from the JSON; no extra type wrapper needed.

type RawContentItems =
  | {
      type: string;
      heading?: string;
      text: string;
    }[]
  | string[]
  | undefined;

// Default output where the site already reads posts
const DEFAULT_OUTPUT_DIR = path.join(process.cwd(), 'contents');

// No separate RawPost type required.

const toSlug = (value: string | undefined) =>
  value
    ? value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
    : undefined;

const normalizeDate = (value: string | number | undefined) => {
  if (
    typeof value === 'number' ||
    (typeof value === 'string' && /^\d+$/.test(value))
  ) {
    const date = new Date(Number(value));
    return Number.isNaN(date.getTime()) ? new Date() : date;
  }

  const parsed = value ? new Date(value) : new Date();
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
};

const stringifyFrontmatterValue = (value: string) => value.replace(/'/g, "''");

const formatFrontmatter = (post: z.infer<typeof postSchema>) => {
  const categories = post.categories
    .map((category) => `  - '${stringifyFrontmatterValue(category)}'`)
    .join('\n');

  return [
    '---',
    'categories:',
    categories,
    `createdAt: '${stringifyFrontmatterValue(post.createdAt)}'`,
    `image: '${stringifyFrontmatterValue(post.image)}'`,
    `slug: '${stringifyFrontmatterValue(post.slug)}'`,
    `summary: '${stringifyFrontmatterValue(post.summary)}'`,
    `title: '${stringifyFrontmatterValue(post.title)}'`,
    `author: '${stringifyFrontmatterValue(post.author)}'`,
    '---',
  ].join('\n');
};

const sanitizeContent = (content: unknown) => {
  if (typeof content === 'string') return content.trim();
  if (Array.isArray(content))
    return content.map((entry) => String(entry).trim()).join('\n\n');
  return '';
};

const writeMarkdownFile = async (
  post: z.infer<typeof postSchema>,
  outDir: string
) => {
  await fsPromises.mkdir(outDir, { recursive: true });
  const filePath = path.join(outDir, `${post.slug}.md`);
  const frontmatter = formatFrontmatter(post);
  const fileBody = `${frontmatter}\n\n${post.content.trim()}\n`;
  await fsPromises.writeFile(filePath, fileBody, 'utf-8');
  return filePath;
};

// Renderers: convert structured JSON content into Markdown
const escapePipe = (s: string) => s.replace(/\|/g, '\\|');

const renderListItems = (items: RawContentItems, ordered = false) => {
  if (!items || !Array.isArray(items)) return '';
  const lines: string[] = [];
  let i = 1;
  for (const it of items) {
    const text = typeof it === 'string' ? it : it.text ?? it.heading ?? '';
    if (!text) continue;
    lines.push(`${ordered ? `${i}.` : '-'} ${text}`);
    i++;
  }
  return lines.join('\n');
};

const renderBlock = (b: ContentBlock): string => {
  if (!b || typeof b !== 'object') return '';
  const bb: any = b as any;
  const type = String(bb.type ?? '').toLowerCase();
  switch (type) {
    case 'heading': {
      const level = bb.level ?? 2;
      const text = bb.text ?? bb.heading ?? '';
      return `${'#'.repeat(Math.min(Math.max(level, 1), 6))} ${text}`.trim();
    }
    case 'paragraph': {
      const text = bb.text ?? '';
      return String(text).trim();
    }
    case 'list': {
      const lt = String(bb.listType ?? '').toLowerCase();
      const ordered = lt === 'ordered' || lt === 'ol' || lt === 'numbered';
      return renderListItems(bb.items, ordered);
    }
    case 'blockquote': {
      const text = String(bb.text ?? '').trim();
      return text
        .split('\n')
        .map((line: string) => `> ${line}`)
        .join('\n');
    }
    case 'code': {
      const lang = String(bb.language ?? '').trim();
      const code = String(bb.text ?? bb.code ?? '')
        .replace(/\s+$/m, '')
        .trim();
      return `\`\`\`${lang}\n${code}\n\`\`\``;
    }
    case 'image': {
      const url = bb.url ?? bb.src ?? '';
      const alt = bb.alt ?? bb.caption ?? '';
      if (!url) return '';
      return `![${alt}](${url})`;
    }
    case 'table': {
      let headers: string[] = bb.headers ?? [];
      const rows: string[][] = Array.isArray(bb.rows) ? bb.rows : [];
      if ((!headers || headers.length === 0) && rows.length > 0) {
        const colCount = rows[0].length;
        headers = Array.from({ length: colCount }, (_, i) => `Column ${i + 1}`);
      }
      const headerLine = `| ${headers.map(escapePipe).join(' | ')} |`;
      const sepLine = `| ${headers.map(() => '---').join(' | ')} |`;
      const rowLines = rows.map((r) => `| ${r.map(escapePipe).join(' | ')} |`);
      return [headerLine, sepLine, ...rowLines].join('\n');
    }
    default: {
      if (bb.items) {
        return renderListItems(bb.items, false);
      }
      const text = String(bb.text ?? '').trim();
      return text;
    }
  }
};

const renderBlocks = (blocks: ContentBlock[] | undefined): string => {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) return '';
  return blocks
    .map((b) => renderBlock(b))
    .filter(Boolean)
    .join('\n\n');
};

const summarizeFromContent = (contentMd: string): string => {
  const firstPara =
    contentMd.split('\n\n').find((p) => p.trim().length > 0) ?? '';
  const sentences = firstPara
    .replace(/\n/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .filter((s) => s.trim().length > 0)
    .slice(0, 2);
  return sentences.join(' ');
};

const buildPromptFromRawPost = (post: JSONDATA, contentMd: string) => `
  You are a professional content writer for a Wealth Management blog. Using ONLY the markdown and metadata below, refine the summary and content for clarity. Do not invent new facts.

  - Keep the tone informative and concise.
  - Preserve lists, headings, and tables.
  - Use the provided image URL as-is.
  - Generate a helpful 2-3 sentence summary.

  Metadata:
  ${JSON.stringify(
    {
      title: post.title,
      slug: post.slug,
      image: post.image,
      categories: post.categories,
      createdAt: normalizeDate(post.createdAt).toISOString(),
    },
    null,
    2
  )}

  Draft Markdown Content:
  ${contentMd}
`;

export const generateData = async ({
  delayMs = 2000,
  limit,
  outDir = DEFAULT_OUTPUT_DIR,
  useAI = false,
}: {
  delayMs?: number;
  limit?: number;
  outDir?: string;
  useAI?: boolean;
} = {}) => {
  const data = (jsonData as JSONDATA[]).slice(0, limit ?? jsonData.length);

  for (const [index, rawPost] of data.entries()) {
    try {
      const contentMd = renderBlocks(rawPost.content);

      if (!useAI) {
        const post: z.infer<typeof postSchema> = {
          title: rawPost.title,
          slug: toSlug(rawPost.slug || rawPost.title) || `post-${index + 1}`,
          image: rawPost.image,
          summary: summarizeFromContent(contentMd) || rawPost.title,
          content: sanitizeContent(contentMd),
          categories: Array.from(
            new Set(
              (rawPost.categories || [])
                .map((c) => String(c).trim())
                .filter(Boolean)
            )
          ),
          author: 'Wealth Management Expert',
          createdAt: normalizeDate(rawPost.createdAt).toISOString(),
        };

        await writeMarkdownFile(post, outDir);
      } else {
        const { object } = await generateObject({
          model: google('gemini-2.5-flash'),
          schema: postSchema,
          prompt: buildPromptFromRawPost(rawPost, contentMd),
        });

        const normalized = {
          ...object,
          slug:
            toSlug(object.slug || rawPost.slug || rawPost.title) ||
            `post-${index + 1}`,
          createdAt: normalizeDate(object.createdAt).toISOString(),
          categories: Array.from(new Set(object.categories)),
          content: sanitizeContent(object.content),
        } satisfies z.infer<typeof postSchema>;

        await writeMarkdownFile(normalized, outDir);
      }
    } catch (error) {
      console.error(`Failed to generate post ${index + 1}:`, error);
    }

    await sleep(delayMs);
  }
};
