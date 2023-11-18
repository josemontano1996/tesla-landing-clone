import { ReactNode } from 'react';

export const HomeSectionFooter = ({ children }: { children: ReactNode }) => {
  return <footer className='flex flex-col flex-1 flex-nowrap justify-end pb-4'>{children}</footer>;
};
