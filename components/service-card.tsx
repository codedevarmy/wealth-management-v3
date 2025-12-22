import { services } from '@/constants';
import { getLocalImage } from '@/lib/plaiceholder';
import Image from 'next/image';
import SpotlightCard from './extends/spotlight-card';
import ServiceDrawer from './service-drawer';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export default async function ServiceCard(props: (typeof services)[number]) {
  const { title, description, cover } = props;

  const { base64 } = await getLocalImage(cover);

  return (
    <SpotlightCard
      key={title}
      className='p-0! rounded-lg! border-none! bg-transparent!'
      // spotlightColor='rgba(0, 229, 255, 0.2)'
      spotlightColor='rgba(173, 156, 82, 0.5)'
      // spotlightColor='rgba(83, 68, 5, 1)'
    >
      <Card className='flex flex-col border rounded-xl overflow-hidden shadow-none pb-0'>
        <CardHeader>
          <CardTitle>
            <h4 className='text-xl font-semibold tracking-tight'>{title}</h4>
          </CardTitle>
          <CardDescription>
            <p className='text-muted-foreground text-base line-clamp-3'>
              {description[0]}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className='flex items-center'>
          <CardAction>
            <ServiceDrawer {...props} />
          </CardAction>
        </CardContent>
        <CardContent className='mt-auto px-0 pb-0'>
          <div className='bg-muted h-40 ml-6 rounded-tl-xl overhflow-hidden'>
            <Image
              src={cover}
              alt={title}
              width={400}
              height={160}
              className='h-full w-full object-cover rounded-tl-xl hover:scale-105 transition-transform duration-300'
              placeholder='blur'
              blurDataURL={base64}
            />
          </div>
        </CardContent>
      </Card>
    </SpotlightCard>
  );
}
