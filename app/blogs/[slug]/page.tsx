type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const slug = (await params).slug;
  console.log('Slug:', slug);

  return <div>BlogPostPage</div>;
}
