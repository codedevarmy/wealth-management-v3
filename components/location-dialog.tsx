import { Sparkles } from '@/assets/icons/animated-icons/Sparkles';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ShadCNShinyButton } from './extends/shadcn-shiny-btn';

// import Image from 'next/image';
import CloudinaryImage from './shared/cloudinary-loader';

export default function LocationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ShadCNShinyButton
          icon={<Sparkles className='h-5! w-5!' />}
          className={buttonVariants({
            size: 'lg',
            className: 'rounded-full',
          })}>
          Know More
        </ShadCNShinyButton>
      </DialogTrigger>
      <DialogContent className='data-[state=open]:zoom-in-0! data-[state=open]:duration-600 sm:max-w-lg w-full gap-2'>
        <DialogHeader>
          <DialogTitle>Our Location</DialogTitle>
          <DialogDescription>
            Visit us at our office to explore personalized financial solutions
            tailored to your goals.
          </DialogDescription>
        </DialogHeader>
        <div className='w-(--radix-dialog-content-width)! mx-auto'>
          <CloudinaryImage
            src='business-location_x7pl9i.avif'
            width={600}
            quality={80}
            priority={true}
          />
          {/* <Image
            src={
              'https://res.cloudinary.com/dxgckfhti/image/upload/v1768549237/business-location_x7pl9i.avif'
            }
            alt='Our Location'
            width={600}
            height={400}
            className='w-(--radix-dialog-content-width)! mx-auto h-full rounded-md'
            loading='lazy'
          /> */}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline' size={'sm'}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
