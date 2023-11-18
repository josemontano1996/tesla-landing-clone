import Image from 'next/image';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  srcUrl: any;
  type: 'video' | 'image';
  alt?: string;
}

export const HomeSectionComponent = ({
  children,
  type,
  srcUrl,
  alt,
}: Props) => {
  return (
    <section className="relative h-screen snap-center overflow-hidden bg-black text-center text-white">
      <div className="relative z-20 flex h-full flex-col">{children}</div>
      <div className="absolute bottom-0 top-0 z-10">
        {type === 'image' ? (
          <div className="h-screen w-screen">
            <Image fill className="object-cover" src={srcUrl} alt={alt || ''} />
          </div>
        ) : (
          <video
            className="h-screen w-screen object-cover"
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
