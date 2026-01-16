import { PostValues } from '@/content-collections';
// import Image from 'next/image';
import Link from 'next/link';
// import Image from './blur-image';
import CloudinaryImage from './shared/cloudinary-loader';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { buttonVariants } from './ui/button';
import { Card, CardAction, CardContent, CardHeader } from './ui/card';

type BlogCardProps = {
  post: PostValues;
};

export default function BlogCard(props: BlogCardProps) {
  const { post } = props;

  function splitUrl(url: string) {
    // https://res.cloudinary.com/dxgckfhti/image/upload/v1768552174/blog_cover_54_xp6ma0.jpg

    // cut the url from here /v1768552174
    // take only blog_cover_54_xp6ma0.jpg
    const parts = url.split('/v')[1].split('/');
    return parts.slice(1).join('/');
  }

  return (
    <Card className='shadow-none py-0 gap-3'>
      <CardHeader className='p-2 pb-0'>
        <div className='aspect-video w-full h-full bg-muted rounded-lg overflow-hidden'>
          {/* <Image
            src={post.image}
            alt={post.title}
            className='object-cover w-full h-full rounded-lg'
            width={500}
            height={500}
            // priority={i < 3}
          /> */}
          <CloudinaryImage
            src={splitUrl(post.image)}
            width={500}
            quality={50}
            className='object-cover w-full h-full rounded-lg'
            // priority={i < 3}
          />
          {/* <Image
            src={post.image}
            alt={post.title}
            className='object-cover w-full h-full rounded-lg'
          /> */}
        </div>
      </CardHeader>
      <CardContent className='pt-0 pb-5 px-5'>
        <div className='flex flex-wrap gap-2 line-clamp-1'>
          {post.categories.slice(0, 3).map((category, index) => (
            <Badge key={index} variant='outline'>
              {category}
            </Badge>
          ))}
        </div>

        <Link href={`/blogs/${post.slug}`}>
          <h3 className='mt-4 text-2xl line-clamp-1 text-[1.4rem] font-semibold underline underline-offset-2 tracking-[-0.015em] hover:no-underline'>
            {post.title}
          </h3>
        </Link>

        <CardAction className={'mt-4'}>
          <Link
            className={buttonVariants({
              variant: 'link',
              size: 'sm',
              className:
                'text-muted-foreground! p-0! h-fit! hover:text-primary! transition-colors! delay-150! duration-300! ease-linear!',
            })}
            href={`/blogs/${post.slug}`}>
            Read more &rarr;
          </Link>
        </CardAction>

        <div className='mt-6 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className='text-muted-foreground text-sm font-medium'>
              {post.author}
            </span>
          </div>

          <span className='text-muted-foreground text-xs'>
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
