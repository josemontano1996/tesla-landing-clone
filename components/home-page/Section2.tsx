import { ButtonDark } from '../ui/ButtonDark';
import { ButtonSoft } from '../ui/ButtonSoft';
import { HomeSectionComponent } from './SectionComponent';
import { HomeSectionFooter } from './SectionFooter';
import { HomeSectionHeader } from './SectionHeader';
import model3Desktop from '@/public/images/Model-3-Desktop-NA.png'

export const HomeSection2 = () => {
  return (
    <HomeSectionComponent srcUrl={model3Desktop} type={'image'}>
      <HomeSectionHeader>
        <h2 className='text-5xl font-medium'>Model 3</h2>
        <p className='text-xl'>Lease starting at $329/mo*</p>
      </HomeSectionHeader>
      <HomeSectionFooter>
        <div className='[&>a]:inline-block [&>a]:mx-4 [&>a]:my-8 [&>a]:py-3 [&>a]:px-24 gap-8'>
          <ButtonSoft>Order now</ButtonSoft>
          <ButtonDark>Demo drive</ButtonDark>
        </div>
        <div className='text-sm'>
          *Excludes taxes and fees with price subject to change. Available in select states.
          <a href='#' className='underline'>
            {' '}
            See Details
          </a>
        </div>
      </HomeSectionFooter>
    </HomeSectionComponent>
  );
};
