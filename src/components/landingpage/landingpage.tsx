import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function LandingPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#E9EBF8]'>
      <div className='w-1/2 text-center'>
        <h1 className='font-medium text-8xl/28 m-5'>Vi är erfarna podcastklippare</h1>
      </div>
      <div className='w-3/8 text-center m-5'>
        <p className='text-2xl'>Podcat är erfarna podcastklippare som hjälper dig att klippa och producera din podcast. Låt oss tillsammans lyfta din podcast till nya höjder!</p>
      </div>
      <div className='flex flex-row gap-x-8 h-24 m-3'>
        <button className='bg-[#0000FF] text-white font-semibold rounded-full h-12 w-55 cursor-pointer'>Så kan vi hjälpa dig</button>
        <button className='bg-[#DBDBDB] font-semibold rounded-full h-12 w-55 cursor-pointer'>Kontakta oss</button>
      </div>
      <FontAwesomeIcon icon={faArrowDown} beatFade size='2x' style={{color: "#00000080"}} />
    </div>
  );
}

export default LandingPage;
