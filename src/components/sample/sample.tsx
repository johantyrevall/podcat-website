import podcat1 from '../../assets/podcat1.jpg'

function Sample() {
  return (
    <div id='sample' className='flex md:flex-row flex-col-reverse md:min-h-screen md:py-20 py-10 md:mb-10'>
      <div className='md:w-1/2 flex items-center md:justify-end justify-center md:pr-10'>
        <img src={podcat1} className='md:size-150 size-75 mt-5' alt='Podcat image'></img>
      </div>
      <div className="md:w-1/3 flex flex-row items-center md:justify-start justify-center md:pl-10">
        <div className='px-11'>
          <h2 className="md:text-7xl text-4xl font-medium md:leading-tight mb-2">
            Testa vår tjänst kostnadsfritt
          </h2>
          <a className='md:text-2xl text-base'>
          Vi erbjuder ett gratis provavsnitt till alla nya kunder. Kontakta oss så redigerar vi ett avsnitt, kostnadsfritt och utan förpliktelser.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sample;
