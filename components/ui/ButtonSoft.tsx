import { ReactNode } from 'react';

export const ButtonSoft = ({ children }: { children: ReactNode }) => {
  return (
    <a href='#' className='bg-info-alt text-black backdrop-blur rounded font-medium text-sm'>
      {children}
    </a>
  );
};
