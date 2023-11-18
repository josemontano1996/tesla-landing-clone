import React, { ReactNode } from 'react';

export const HomeSectionHeader = ({ children }: { children: ReactNode }) => {
  return <header className="space-y-2 pt-20">{children}</header>;
};
