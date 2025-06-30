import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function LandingPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-20 bg-[#E9EBF8]'>
      <div className='w-1/2 text-center'>
        <h1 className='font-medium text-8xl/28 m-5'>Vi klipper er podcast</h1>
      </div>
      <div className='w-3/8 text-center m-5'>
        <p className='text-2xl'>Vi på Podcat är podcastklippare med mångårig erfarenhet. Vi förvandlar er inspelning till ett avsnitt med kristallklart ljud, redo för publicering.</p>
      </div>
      <div className='flex flex-row gap-x-8 h-24 m-3'>
        <a href='#services' className='bg-[#0000FF] text-white font-semibold flex items-center justify-center rounded-full h-12 w-55 cursor-pointer hover:bg-[#0000cc]'>Så kan vi hjälpa dig</a>
        <a href='#contact' className='bg-[#DBDBDB] font-semibold flex items-center justify-center rounded-full h-12 w-55 cursor-pointer hover:bg-[#E2E2E2]'>Kontakta oss</a>
      </div>
      <FontAwesomeIcon icon={faArrowDown} beatFade size='2x' style={{color: "#00000080"}} />
    </div>
  );
}

export default LandingPage;
