import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function LandingPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-20 bg-[#E9EBF8]'>
      <div className='w-full md:w-1/2 text-center'>
        <h1 className='font-medium md:text-8xl/28 text-5xl m-5'>Vi klipper er podcast</h1>
      </div>
      <div className='w-full md:w-3/8 text-center m-5'>
        <p className='md:text-2xl md:mx-0 text-base mx-5'>Vi på Podcat är podcastklippare med mångårig erfarenhet. Vi förvandlar er inspelning till ett avsnitt med kristallklart ljud, redo för publicering.</p>
      </div>
      <div className='flex flex-col gap-4 md:flex-row w-3/4 md:w-auto md:gap-x-8 md:h-24 m-3 mb-10 md:mb-0'>
        <a href='#services' className='bg-[#0000FF] text-white font-semibold flex items-center justify-center rounded-full h-12 md:w-55 w-full cursor-pointer hover:bg-[#0000cc]'>Så kan vi hjälpa dig</a>
        <a href='#contact' className='bg-[#DBDBDB] font-semibold flex items-center justify-center rounded-full h-12 md:w-55 w-full cursor-pointer hover:bg-[#E2E2E2]'>Kontakta oss</a>
      </div>
      <FontAwesomeIcon icon={faArrowDown} beatFade size='2x' style={{color: "#00000080"}} />
    </div>
  );
}

export default LandingPage;
