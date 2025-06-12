import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <div className='px-50 h-screen'>
      <h2 className='text-6xl font-medium flex flex-col items-start justify-start pt-20'>Vad vi erbjuder</h2>
      <div className='flex flex-row items-center justify-center mt-10'>
        <div className='flex flex-col items-center justify-center border-1 m-2 w-400 h-[500px]' data-aos='fade-up'>
            <FontAwesomeIcon icon={faScissors} size='10x' border='1px' className='mb4' />
          <h2 className='text-2xl font-medium m-4'>Klippning</h2>
          <div className='w-7/9'>
            <p>Vi skräddarsyr din ljudfil genom professionell klippning. Vi ser till  att innehållet flyter smidigt och klipper bort felsägningar, oönskade ljud, lägger till jinglar och segmenterar ditt avsnitt.</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center border-1 m-2 w-400 h-[500px]' data-aos='fade-up'>
          <FontAwesomeIcon icon={faSliders} size='10x' className="rotate-90" border='1px' />
          <h2 className='text-2xl font-medium m-4'>Ljudmix</h2>
          <div className='w-7/9'>
            <p>Erfarna ljudtekniker balanserar och optimerar alla ljudspår så att de  samspelar perfekt. Vi justerar volym, equalizer och effekter för att ge  din produktion den professionella touch den förtjänar.</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center border-1 m-2 w-400 h-[500px]' data-aos='fade-up'>
          <FontAwesomeIcon icon={faMicrophoneLines} size='10x' border='1px' />
          <h2 className='text-2xl font-medium m-4'>Brusreducering</h2>
          <div className='w-7/9'>
            <p>Störande bakgrundsljud förstör ofta en annars bra inspelning. Med  avancerad teknik rensar vi bort oväntade ljud, såsom ventilation, trafik eller andra distraktioner, för en kristallklar ljudkvalitet.</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center border-1 m-2 w-400 h-[500px]' data-aos='fade-up'>
          <FontAwesomeIcon icon={faWaveSquare} size='10x' border='1px' />
          <h2 className='text-2xl font-medium m-4'>Önskemål</h2>
          <div className='w-7/9'>
            <p>Självklart strävar vi efter att tilgodose alla behov och önskemål. Vill du att vi behandlar ditt innehåll på något särskilt sätt så löser vi det.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
