import { useContext, useState } from 'react';
import { UIContext } from '@/context/ui/UIContext';
import Image from 'next/image';

export const DiscoverNav = () => {
  const { onSectionDisplay } = useContext(UIContext);
  const [hoverOut, setHoverOut] = useState(false);

  const onHoverOut = () => {
    setHoverOut(true);

    setTimeout(() => {
      onSectionDisplay(null);
      setHoverOut(false);
    }, 300);
  };

  return (
    <div className="absolute top-0 z-30 flex h-screen w-screen">
      <section
        className={`absolute top-0 z-30 grid w-full animate-fadeIn grid-cols-3 bg-white pb-10 pt-28 
        ${hoverOut && 'animate-fadeOut'}`}
        onMouseOver={() => onSectionDisplay('discover')}
        onMouseOut={onHoverOut}
      >
        <ul className="col-span-2 flex flex-wrap gap-4 pl-[10vw] ">
          <li className="text-center">
            <Image
              width={175}
              height={300}
              src="/images/Model-S.png"
              alt="Model S car"
            />
            <h3>Discover</h3>
            <p>
              <a
                href="#"
                className="mr-4 inline-block text-sm font-thin underline"
              >
                Learn
              </a>
              <a href="#" className="inline-block  text-sm font-thin underline">
                Order
              </a>
            </p>
          </li>
          <li className="text-center">
            <Image
              width={175}
              height={250}
              src="/images/Model-3.png"
              alt="Model S car"
            />
            <h3>Model 3</h3>
            <p>
              <a
                href="#"
                className="mr-4 inline-block text-sm font-thin underline"
              >
                Learn
              </a>
              <a href="#" className="inline-block  text-sm font-thin underline">
                Order
              </a>
            </p>
          </li>
          <li className="text-center">
            <Image
              width={175}
              height={250}
              src="/images/Model-X.png"
              alt="Model S car"
            />
            <h3>Model X</h3>
            <p>
              <a
                href="#"
                className="mr-4 inline-block text-sm font-thin underline"
              >
                Learn
              </a>
              <a href="#" className="inline-block  text-sm font-thin underline">
                Order
              </a>
            </p>
          </li>
          <li className="text-center">
            <Image
              width={175}
              height={250}
              src="/images/Model-Y.png"
              alt="Model S car"
            />
            <h3>Model Y</h3>
            <p>
              <a
                href="#"
                className="mr-4 inline-block text-sm font-thin underline"
              >
                Learn
              </a>
              <a href="#" className="inline-block  text-sm font-thin underline">
                Order
              </a>
            </p>
          </li>
          <li className="text-center">
            <Image
              width={175}
              height={250}
              src="/images/HMC-RedBlue.png"
              alt="Model S car"
            />
            <h3>Model S</h3>
            <p>
              <a
                href="#"
                className="mr-4 inline-block text-sm font-thin underline"
              >
                Learn
              </a>
              <a href="#" className="inline-block  text-sm font-thin underline">
                Order
              </a>
            </p>
          </li>
        </ul>
        <nav className="border-info-alt border-l-2 pl-12 text-sm font-medium">
          <ul className="space-y-2 [&>li>a]:inline-block">
            <li>
              <a href="#">Inventory</a>
            </li>
            <li>
              <a href="#">Used Cars</a>
            </li>
            <li>
              <a href="#">Demo Drive</a>
            </li>
            <li>
              <a href="#">Trade in</a>
            </li>
            <li>
              <a href="#">Help Me Chose</a>
            </li>
            <li>
              <a href="#">Compare</a>
            </li>
            <li>
              <a href="#">Fleet</a>
            </li>
            <li>
              <a href="#">Cybertruck</a>
            </li>
            <li>
              <a href="#">Semi</a>
            </li>
            <li>
              <a href="#">Roadster</a>
            </li>
          </ul>
        </nav>
      </section>

      <div className="flex-1 backdrop-blur" />
    </div>
  );
};
