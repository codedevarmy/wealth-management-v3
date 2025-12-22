import { allPosts } from '@/.content-collections/generated';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { getLocalImage } from '@/lib/plaiceholder';
import { MDXContent } from '@content-collections/mdx/react';
import { ArrowLeftCircle } from 'lucide-react';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
  const parentInfo = await parent;

  return {
    title: post.title,
    description: post.summary,
    keywords: post.categories,
    creator: post.author,
    openGraph: {
      determiner: parentInfo.openGraph?.determiner,
      title: post.title,
      description: post.summary,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/${post.image}`,
          width: 1200,
          height: 630,
          alt: 'Ascent Wealth',
        },
      ],
      phoneNumbers: parentInfo.openGraph?.phoneNumbers,
      emails: parentInfo.openGraph?.emails,
      siteName: parentInfo.openGraph?.siteName,
      locale: parentInfo.openGraph?.locale,
      alternateLocale: parentInfo.openGraph?.alternateLocale,
      type: 'article',
      videos: parentInfo.openGraph?.videos,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${post.slug}`,
      countryName: parentInfo.openGraph?.countryName,
      ttl: parentInfo.openGraph?.ttl,
    },
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const slug = (await params).slug;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const { base64 } = await getLocalImage(post.image);

  return (
    <article className='max-w-4xl mx-auto px-4 py-24'>
      {/* Header */}
      <header className='mb-12'>
        <div className='mb-6'>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className='w-full aspect-video object-cover rounded-lg'
            priority
            placeholder='blur'
            blurDataURL={base64}
          />
        </div>

        <h1 className='text-4xl font-bold mb-4'>{post.title}</h1>

        <div className='flex flex-wrap gap-2 mb-6'>
          {post.categories.map((category) => (
            <Badge key={category}>{category}</Badge>
          ))}
        </div>

        <div className='flex items-center justify-between text-sm text-muted-foreground'>
          <div className='flex items-center gap-3'>
            <Link
              href={'/#blogs'}
              className={buttonVariants({
                variant: 'outline',
                size: 'icon-sm',
                className: 'rounded-full',
              })}>
              <ArrowLeftCircle className={'size-4'} />
            </Link>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='author' />
              <AvatarFallback>AU</AvatarFallback>
            </Avatar>
            <span>{post.author}</span>
          </div>
          <time>
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </header>

      {/* MDX Content */}
      {/* <MDXRenderer mdx={post.mdx} /> */}
      <div className='prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none'>
        <MDXContent code={post.mdx} />
      </div>
    </article>
  );
}
