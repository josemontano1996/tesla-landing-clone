export default function Home() {
  return (
    <>
      <section className='bg-black h-screen w-screen text-center relative overflow-hidden text-white'>
        <div className='z-20 relative h-full flex flex-col'>
          <header className='pt-[7.5rem]'>
            <h2 className='text-5xl font-medium mb-2'>Model Y</h2>
            <p className='text-xl'>Lease starting at $399/mo*</p>
          </header>
          <footer className='flex flex-col flex-1 flex-nowrap justify-end pb-4'>
            <div className='[&>a]:inline-block [&>a]:mx-4 [&>a]:my-8 [&>a]:py-3 [&>a]:px-24  gap-8'>
              <a href='#' className='bg-info backdrop-blur rounded text-sm font-medium'>
                Order now
              </a>
              <a
                href='#'
                className='bg-info-alt text-black backdrop-blur rounded font-medium text-sm'
              >
                Demo drive
              </a>
            </div>
            <div className='text-sm'>
              *Excludes taxes and fees with price subject to change. Available in select states.
              <a href='#' className='underline'>
                {' '}
                See Details
              </a>
            </div>
          </footer>
        </div>
        <div className='absolute top-0 bottom-0 z-10'>
          <video autoPlay muted loop src='/videos/tesla-video-1.webm'></video>
        </div>
      </section>
    </>
  );
}

