import { ReactNode } from 'react';

export const ButtonDark = ({ children, href = '#' }: { children: ReactNode; href?: string }) => {
  return (
    <a href={href} className='inline-block bg-info backdrop-blur rounded text-sm font-medium'>
      {children}
    </a>
  );
};
