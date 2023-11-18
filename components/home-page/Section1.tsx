import { ButtonDark } from '../ui/ButtonDark';
import { ButtonSoft } from '../ui/ButtonSoft';
import { HomeSectionComponent } from './SectionComponent';
import { HomeSectionFooter } from './SectionFooter';
import { HomeSectionHeader } from './SectionHeader';

export const HomeSection1 = () => {
  return (
    <HomeSectionComponent srcUrl={'/videos/tesla-video-1.webm'} type={'video'}>
      <HomeSectionHeader>
        <h2 className='text-5xl font-medium'>Model Y</h2>
        <p className='text-xl'>Lease starting at $399/mo*</p>
      </HomeSectionHeader>
      <HomeSectionFooter>
        <div className='[&>a]:inline-block [&>a]:mx-4 [&>a]:my-8 [&>a]:py-3 [&>a]:px-24 gap-8'>
          <ButtonDark>Order now</ButtonDark>
          <ButtonSoft>Demo drive</ButtonSoft>
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
