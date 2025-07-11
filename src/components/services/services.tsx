import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScissors, faMicrophoneLines, faSliders, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import WaveSurferPlayer from './WaveSurferPlayer';

const services = [
  {
    icon: faScissors,
    iconClass: 'md:mb-4 text-6xl md:text-[10rem]',
    title: 'Klippning',
    desc: 'Vi förvandlar din råa ljudfil till ett publiceringsklart avsnitt. Vi klipper bort felsägningar, utfyllnadsljud och synkroniserar ljudspår - allt med bibehållen rytm.',
  },
  {
    icon: faSliders,
    iconClass: 'rotate-90 md:mb-4 text-6xl md:text-[10rem]',
    title: 'Ljudmix',
    desc: 'Erfarna ljudtekniker behandlar ljudet och justerar volym, equalizer och kompression för att ge din produktion den professionella touch dina lyssnare förväntar sig.',
  },
  {
    icon: faMicrophoneLines,
    iconClass: 'md:mb-4 text-6xl md:text-[10rem]',
    title: 'Brusreducering',
    desc: 'Störande bakgrundsljud kan förstöra en annars bra inspelning. Vi rensar bort brus som ventilation, ekon och andra distraktioner för en kristallklar ljudkvalitet. ',
  },
  {
    icon: faWaveSquare,
    iconClass: 'md:mb-4 text-6xl md:text-[10rem]',
    title: 'Samarbete',
    desc: 'Vi arbetar alltid efter era önskemål, oavsett om du har särskilda instruktioner eller vill göra sista ändringar innan publicering. Vi är inte nöjda förrän du är det.',
  },
];

function Services() {
  return (
    <div id='services' className='px-4 md:px-50 min-h-screen py-10 md:py-20'>
      <h2 className='text-3xl md:text-6xl font-medium flex flex-col items-start justify-start pt-10 md:pt-20'>Vad vi erbjuder</h2>
      <div className='flex flex-col md:flex-row items-center justify-center mt-4 md:mt-10'>
        {services.map((service) => (
          <div
            key={service.title}
            className='flex flex-col items-center justify-start m-2 w-full md:w-[400px] h-auto md:h-[500px] pt-6 md:pt-10'
            data-aos='fade-up'
          >
            <FontAwesomeIcon icon={service.icon} className={service.iconClass} />
            <h2 className='text-2xl md:text-3xl font-medium m-4'>{service.title}</h2>
            <div className='w-full md:w-7/9 flex-1 overflow-auto'>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* <h3 className='text-4xl font-medium mb-6'>Lyssna på skillnaden</h3> */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-30 mt-6 md:mt-0'>
          <div className='flex flex-col items-start w-full md:w-auto mb-6 md:mb-0'>
            <h4 className='mb-2 ms-2'>Före</h4>
            <WaveSurferPlayer src='/before.mp3' peaksUrl='/audio-peaks-before.json' />
          </div>
          <div className='flex flex-col items-start w-full md:w-auto'>
            <h4 className='mb-2 ms-2'>Efter</h4>
            <WaveSurferPlayer src='/after.mp3' peaksUrl='/audio-peaks-before.json' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
