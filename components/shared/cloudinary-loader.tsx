// https://res.cloudinary.com/dxgckfhti/image/upload/v1768552174/blog_cover_54_xp6ma0.jpg

import Image from 'next/image';

type CloudinaryImageProps = {
  src: string;
  width: number;
  quality?: number;
  priority?: boolean;
  className?: string;
};

const CloudinaryImage = (props: CloudinaryImageProps) => {
  const cloudinaryImageLoader = () => {
    const params = [
      'f_auto',
      'c_limit',
      `w_${props.width}`,
      `q_${props.quality || 'auto'}`,
    ];
    return `https://res.cloudinary.com/dxgckfhti/image/upload/${params.join(
      ','
    )}/v1768552174/${props.src}`;
  };

  return (
    <Image
      loader={cloudinaryImageLoader}
      src='eatery/item-8.jpg'
      alt='Food'
      width={450}
      height={280}
      priority={props.priority ? true : false}
      className={props.className}
      placeholder='blur'
      blurDataURL='/Logo-dark.svg'
    />
  );
};
export default CloudinaryImage;
