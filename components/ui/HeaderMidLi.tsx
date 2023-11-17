'use client';

import { useContext } from 'react';
import { UIContext } from '@/context/ui/UIContext';
import { ISection } from '../../interfaces';

export const HeaderMidLi = ({ section, text }: { section: ISection; text: string }) => {
  const { sectionDisplay, onSectionDisplay } = useContext(UIContext);
  return (
    <li>
      <a
        href='#'
        className={`${sectionDisplay === section && 'text-black bg-gray-100'}`}
        onMouseOver={() => onSectionDisplay(section)}
      >
        {text}
      </a>
    </li>
  );
};
