import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import WaveSurferPlayer from './WaveSurferPlayer';


function Services() {
  return (
    <div id='services' className='px-50 min-h-screen py-20'>
      <h2 className='text-6xl font-medium flex flex-col items-start justify-start pt-20'>Vad vi erbjuder</h2>
      <div className='flex flex-row items-center justify-center mt-10'>
        <div className='flex flex-col items-center justify-start m-2 w-[400px] h-[500px] pt-10' data-aos='fade-up'>
          <FontAwesomeIcon icon={faScissors} size='10x' className='mb-4' />
          <h2 className='text-3xl font-medium m-4'>Klippning</h2>
          <div className='w-7/9 flex-1 overflow-auto'>
            <p>Vi förvandlar din råa ljudfil till ett publiceringsklart avsnitt. Vi klipper bort felsägningar, utfyllnadsljud och synkroniserar ljudspår - allt med bibehållen rytm.</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-start m-2 w-[400px] h-[500px] pt-10' data-aos='fade-up'>
          <FontAwesomeIcon icon={faSliders} size='10x' className='rotate-90 mb-4' />
          <h2 className='text-3xl font-medium m-4'>Ljudmix</h2>
          <div className='w-7/9 flex-1 overflow-auto'>
            <p>Erfarna ljudtekniker behandlar ljudet och justerar volym, equalizer och kompression för att ge din produktion den professionella touch dina lyssnare förväntar sig.</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-start m-2 w-[400px] h-[500px] pt-10' data-aos='fade-up'>
          <FontAwesomeIcon icon={faMicrophoneLines} size='10x' className='mb-4' />
          <h2 className='text-3xl font-medium m-4'>Brusreducering</h2>
          <div className='w-7/9 flex-1 overflow-auto'>
            <p>Störande bakgrundsljud kan förstöra en annars bra inspelning. Vi rensar bort brus som ventilation, ekon och andra distraktioner för en kristallklar ljudkvalitet. </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-start m-2 w-[400px] h-[500px] pt-10' data-aos='fade-up'>
          <FontAwesomeIcon icon={faWaveSquare} size='10x' className='mb-4' />
          <h2 className='text-3xl font-medium m-4'>Samarbete</h2>
          <div className='w-7/9 flex-1 overflow-auto'>
            <p>Vi arbetar alltid efter era önskemål, oavsett om du har särskilda instruktioner eller vill göra sista ändringar innan publicering. Vi är inte nöjda förrän du är det.</p>
          </div>
        </div>
      </div>
      <div>
        {/* <h3 className='text-4xl font-medium mb-6'>Lyssna på skillnaden</h3> */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-30'>
          <div className='flex flex-col items-start'>
            <h4 className='mb-2 ms-2'>Före</h4>
            <WaveSurferPlayer src='/before.mp3' peaksUrl='/audio-peaks-before.json' />
          </div>
          <div className='flex flex-col items-start'>
            <h4 className='mb-2 ms-2'>Efter</h4>
            <WaveSurferPlayer src='/after.mp3' peaksUrl='/audio-peaks-before.json' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
