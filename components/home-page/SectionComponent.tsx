import Image from 'next/image';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  srcUrl: any;
  type: 'video' | 'image';
  alt?: string;
}

export const HomeSectionComponent = ({ children, type, srcUrl, alt }: Props) => {
  return (
    <section className='bg-black h-screen text-center relative overflow-hidden text-white'>
      <div className='z-20 relative h-full flex flex-col'>{children}</div>
      <div className='absolute top-0 bottom-0 z-10'>
        {type === 'image' ? (
          <div className='h-screen w-screen object-cover'>
            <Image fill objectFit='cover' src={srcUrl} alt={alt || ''} />
          </div>
        ) : (
          <video
            className='h-screen w-screen object-cover'
            autoPlay
            muted
            loop
            src={srcUrl}
          ></video>
        )}
      </div>
    </section>
  );
};
