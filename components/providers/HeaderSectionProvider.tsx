'use client';

import { useContext } from 'react';
import { VehiclesNav } from '../ui/VehiclesNav';
import { UIContext } from '@/context/ui/UIContext';
import { EnergyNav } from '../ui/EnergyNav';
import { CharginNav } from '../ui/ChargingNav';
import { DiscoverNav } from '../ui/DiscoverNav';
import { ShopNav } from '../ui/ShopNav';

export const HeaderSectionProvider = () => {
  const { sectionDisplay } = useContext(UIContext);

  return (
    <>
      {sectionDisplay === 'vehicles' && <VehiclesNav />}
      {sectionDisplay === 'energy' && <EnergyNav />}
      {sectionDisplay === 'charging' && <CharginNav />}
      {sectionDisplay === 'discover' && <DiscoverNav />}
      {sectionDisplay === 'shop' && <ShopNav />}
    </>
  );
};
