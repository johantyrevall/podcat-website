import podcat1 from '../../assets/podcat1.jpg'

function Sample() {
  return (
    <div id='sample' className='flex min-h-screen py-20'>
      <div className='w-1/2 flex items-center justify-end pr-10'>
        <img src={podcat1} className='size-150' alt='Podcat image'></img>
      </div>
      <div className="w-1/3 flex flex-row items-center justify-start pl-10">
        <div>
          <h2 className="text-7xl font-medium leading-tight">
            Testa vår tjänst kostnadsfritt
          </h2>
          <a className='text-lg'>
          Vi erbjuder ett gratis provavsnitt till alla nya kunder. Kontakta oss så redigerar vi ett avsnitt, kostnadsfritt och utan förpliktelser.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sample;
