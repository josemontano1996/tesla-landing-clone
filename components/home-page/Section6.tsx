import { ButtonDark } from '../ui/ButtonDark';
import { ButtonSoft } from '../ui/ButtonSoft';
import { HomeSectionComponent } from './SectionComponent';
import { HomeSectionFooter } from './SectionFooter';
import { HomeSectionHeader } from './SectionHeader';
import solarPanels from '@/public/images/425_HP_SolarPanels_D.png';

export const HomeSection6 = () => {
  return (
    <HomeSectionComponent srcUrl={solarPanels} type={'image'}>
      <HomeSectionHeader>
        <h2 className="text-5xl font-medium">Solar Panels</h2>
        <p className="text-xl">Lease starting at $329/mo*</p>
      </HomeSectionHeader>
      <HomeSectionFooter>
        <div className="gap-8 [&>a]:mx-4 [&>a]:my-8 [&>a]:inline-block [&>a]:px-24 [&>a]:py-3">
          <ButtonSoft>Order now</ButtonSoft>
          <ButtonDark>Demo drive</ButtonDark>
        </div>
        <div className="text-sm">
          *Excludes taxes and fees with price subject to change. Available in
          select states.
          <a href="#" className="underline">
            {' '}
            See Details
          </a>
        </div>
      </HomeSectionFooter>
    </HomeSectionComponent>
  );
};
