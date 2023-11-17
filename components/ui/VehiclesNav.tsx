import { useContext, useState } from 'react';
import { UIContext } from '@/context/ui/UIContext';
import Image from 'next/image';

export const VehiclesNav = () => {
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
    <div className='h-screen flex absolute top-0 z-30 w-screen'>
      <section
        className={`bg-white grid grid-cols-3 pt-28 pb-10 absolute top-0 w-full z-30 animate-fadeIn 
        ${hoverOut && 'animate-fadeOut'}`}
        onMouseOver={() => onSectionDisplay('vehicles')}
        onMouseOut={onHoverOut}
      >
        <ul className='flex flex-wrap col-span-2 pl-[10vw] gap-4 '>
          <li className='text-center'>
            <Image width={175} height={300} src='/images/Model-S.avif' alt='Model S car' />
            <h3>Model S</h3>
            <p>
              <a href='#' className='inline-block mr-4 underline text-sm font-thin'>
                Learn
              </a>
              <a href='#' className='inline-block  underline text-sm font-thin'>
                Order
              </a>
            </p>
          </li>
          <li className='text-center'>
            <Image width={175} height={250} src='/images/Model-3.avif' alt='Model S car' />
            <h3>Model 3</h3>
            <p>
              <a href='#' className='inline-block mr-4 underline text-sm font-thin'>
                Learn
              </a>
              <a href='#' className='inline-block  underline text-sm font-thin'>
                Order
              </a>
            </p>
          </li>
          <li className='text-center'>
            <Image width={175} height={250} src='/images/Model-X.avif' alt='Model S car' />
            <h3>Model X</h3>
            <p>
              <a href='#' className='inline-block mr-4 underline text-sm font-thin'>
                Learn
              </a>
              <a href='#' className='inline-block  underline text-sm font-thin'>
                Order
              </a>
            </p>
          </li>
          <li className='text-center'>
            <Image width={175} height={250} src='/images/Model-Y.avif' alt='Model S car' />
            <h3>Model Y</h3>
            <p>
              <a href='#' className='inline-block mr-4 underline text-sm font-thin'>
                Learn
              </a>
              <a href='#' className='inline-block  underline text-sm font-thin'>
                Order
              </a>
            </p>
          </li>
          <li className='text-center'>
            <Image width={175} height={250} src='/images/HMC-RedBlue.png' alt='Model S car' />
            <h3>Model S</h3>
            <p>
              <a href='#' className='inline-block mr-4 underline text-sm font-thin'>
                Learn
              </a>
              <a href='#' className='inline-block  underline text-sm font-thin'>
                Order
              </a>
            </p>
          </li>
        </ul>
        <nav className='border-l-2 border-info-alt pl-12 text-sm font-medium'>
          <ul className='[&>li>a]:inline-block space-y-2'>
            <li>
              <a href='#'>Inventory</a>
            </li>
            <li>
              <a href='#'>Used Cars</a>
            </li>
            <li>
              <a href='#'>Demo Drive</a>
            </li>
            <li>
              <a href='#'>Trade in</a>
            </li>
            <li>
              <a href='#'>Help Me Chose</a>
            </li>
            <li>
              <a href='#'>Compare</a>
            </li>
            <li>
              <a href='#'>Fleet</a>
            </li>
            <li>
              <a href='#'>Cybertruck</a>
            </li>
            <li>
              <a href='#'>Semi</a>
            </li>
            <li>
              <a href='#'>Roadster</a>
            </li>
          </ul>
        </nav>
      </section>

      <div className='backdrop-blur flex-1' />
    </div>
  );
};
