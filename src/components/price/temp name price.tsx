import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import {useState } from 'react'

const FeatureItem = ({ text }: { text: string }) => (
    <div className='flex flex-row items-center justify-start md:ms-20 ms-7 mt-2'>
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#63E6BE" }} />
        <p className='md:text-lg md:ms-5 ms-2'>{text}</p>
    </div>
);

const paymentOptions = [
  { label: 'Per avsnitt', value: 'per_avsnitt' },
  { label: 'Prenumeration', value: 'per_manad' }
];

const audioLengths = [
  { label: '30 min', value: 30 },
  { label: '60 min', value: 60 },
  { label: '90 min', value: 90 }
];

const priceTable = {
  per_avsnitt: { 30: 1000, 60: 1500, 90: 2000 },
  per_manad: { 30: 800, 60: 1200, 90: 1600 }
};


function Price() {
    type PaymentType = 'per_avsnitt' | 'per_manad';
    type AudioLength = 30 | 60 | 90;

    const [paymentType, setPaymentType] = useState<PaymentType>('per_avsnitt');
    const [audioLength, setAudioLength] = useState<AudioLength>(30);

    const price = priceTable[paymentType][audioLength];

    return (
        <div id='pricing' className='flex flex-col items-center md:min-h-screen md:py-20 bg-[#F0F0F0]'>
            <h2 className='text-3xl md:text-6xl font-medium mt-10 md:mb-5'>Prisexempel</h2>
            <p className='md:text-xl text-lg'>Betala per avsnitt eller per månad</p>
            <div className='flex flex-row md:gap-x-8 gap-x-2 mb-5 mt-3'>
                {paymentOptions.map(option => (
                    <div key={option.value} className={option.value === 'per_manad' ? "relative inline-block" : ""}>
                        <button
                            className={
                                paymentType === option.value
                                    ? 'bg-[#0000FF] text-white font-semibold rounded-full h-12 md:w-55 w-35 cursor-pointer md:text-base text-sm'
                                    : 'bg-white border-2 hover:bg-blue-50 border-[#0000FF] font-semibold rounded-full h-12 md:w-55 w-35 cursor-pointer md:text-base text-sm'
                            }
                            onClick={() => setPaymentType(option.value as PaymentType)}
                        >
                            {option.label}
                        </button>
                        {option.value === 'per_manad' && (
                            <div className="absolute -top-3 -right-5 bg-[#FF0000] text-white md:text-xs text-[10px] font-bold rounded-md px-1 py-1 shadow">
                                Spara 20%
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className='bg-[#E9EBF8] flex flex-col items-center justify-center md:w-xl w-9/10 md:p-5 p-2 shadow-xl'>
                <p className='md:text-lg'>Från</p>
                <div className='flex flex-row items-center'>
                    <p className='md:text-5xl text-2xl font-semibold'>{price} SEK</p>
                    <p className='md:text-lg'>
                        {paymentType === 'per_avsnitt' ? '/avsnitt' : '/avsnitt'}
                    </p>
                </div>
            </div>
            <div className='bg-white md:w-xl w-9/10 md:pt-2 shadow-xl'>
                <FeatureItem text="Intro/Outro" />
                <FeatureItem text="Mixning " />
                <FeatureItem text="Mastering enligt branschstandard " />
                <FeatureItem text="Brusreducering" />
                <FeatureItem text="Volymjustering " />
                <FeatureItem text="Borttagning av utfyllnadsljud" />
                <FeatureItem text="ID3-taggning" />
                <FeatureItem text="Kostnadsfria korrigeringar" />
                <FeatureItem text="Snabb leverans" />
                <div className='border-2 border-[#E9EBF8] md:mx-20 m-3 rounded-full'></div>
            </div>
            <div className='bg-white md:w-xl w-9/10 flex flex-col items-center justify-center shadow-xl mb-10'>
                <p className='md:text-lg'>Hur lång är din råa ljudfil?</p>
                <div className='flex flex-row md:gap-x-8 gap-x-2 m-3'>
                {audioLengths.map(length => (
                        <button
                            key={length.value}
                            className={
                                audioLength === length.value
                                    ? 'bg-[#0000FF] text-white font-semibold rounded-full h-12 md:w-30 w-25 cursor-pointer md:text-base text-sm'
                                    : 'bg-white border-2  hover:bg-blue-50 border-[#0000FF] font-semibold rounded-full h-12 md:w-30 w-25 cursor-pointer md:text-base text-sm'
                            }
                            onClick={() => setAudioLength(length.value as 30 | 60 | 90)}>
                            {length.label}
                        </button>
                    ))}
                </div>
                <button className='bg-[#0000FF] text-white font-semibold rounded-full h-12 md:w-55 w-35 mb-5 md:text-base text-sm'>
                    {price} SEK
                </button>
            </div>
        </div>
    );
}

export default Price;