import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const FeatureItem = ({ text }: { text: string }) => (
    <div className='flex flex-row items-center justify-start ms-20 mt-2'>
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#63E6BE" }} />
        <p className='text-lg ms-5'>{text}</p>
    </div>
);

function Price() {
    return (
        <div className='flex flex-col items-center h-screen bg-[#F0F0F0]'>
            <h2 className='text-6xl font-medium mt-10 mb-5'>Prisexempel</h2>
            <p className='text-xl'>Betala per avsnitt eller per månad</p>
            <div className='flex flex-row gap-x-8 mb-5 mt-3'>
                <button className='bg-[#0000FF] text-white font-semibold rounded-full h-12 w-55'>Per avsnitt</button>
                <div className="relative inline-block">
                    <button className='bg-white border-2 hover:bg-blue-50 border-[#0000FF] font-semibold rounded-full h-12 w-55'>
                        Per månad
                    </button>
                    <div className="absolute -top-3 -right-5 bg-[#FF0000] text-white text-xs font-bold rounded-md px-1 py-1 shadow">
                        Spara 27%
                    </div>
                </div>
            </div>
            <div className='bg-[#E9EBF8] flex flex-col items-center justify-center w-xl p-5 shadow-xl'>
                <p className='text-lg'>Från</p>
                <div className='flex flex-row items-center'>
                    <p className='text-5xl font-bold'>1000 SEK</p>
                    <p className='text-lg'>/avsnitt</p>
                </div>
            </div>
            <div className='bg-white w-xl pt-2 shadow-xl'>
                <FeatureItem text="Intro/Outro" />
                <FeatureItem text="Genomlyssnad redigering" />
                <FeatureItem text="Volymjustering enlig branschstandard" />
                <FeatureItem text="Snabb leverans" />
                <FeatureItem text="Mixning" />
                <FeatureItem text="Borttagning av utfyllnadsljud" />
                <FeatureItem text="Brusreducering" />
                <FeatureItem text="ID3-taggning" />
                <FeatureItem text="Kostnadsfria korrigeringar" />
                <div className='border-2 border-[#E9EBF8] mx-20 m-3 rounded-full'></div>
            </div>
            <div className='bg-white w-xl flex flex-col items-center justify-center shadow-xl'>
                <p className='text-lg'>Hur lång är din råa ljudfil?</p>
                <div className='flex flex-row gap-x-8 m-3'>
                    <button className='bg-[#0000FF] text-white font-semibold rounded-full h-12 w-30'>30 min</button>
                    <button className='bg-white border-2 border-[#0000FF] font-semibold rounded-full h-12 w-30'>60 min</button>
                    <button className='bg-white border-2 border-[#0000FF] font-semibold rounded-full h-12 w-30'>90 min</button>
                </div>
                <button className='bg-[#0000FF] text-white font-semibold rounded-full h-12 w-55 mb-5'>1000 SEK</button>
            </div>
        </div>
    );
}

export default Price;