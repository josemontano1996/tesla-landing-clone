import React, { ReactNode } from 'react';

export const HomeSectionHeader = ({ children }: { children: ReactNode }) => {
  return <header className='pt-[7.5rem] space-y-2'>{children}</header>;
};
