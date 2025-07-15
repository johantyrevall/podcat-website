import poddr from '../../assets/poddr.png'

function Contact() {
    return (
        <div id='contact' className='flex flex-col items-center md:min-h-screen md:py-20 py-10 bg-[#F0F0F0]'>
            <div className='w-4/5'>
                <div className='md:pt-20 md:w-150 self-start'>
                    <h2 className='md:text-2xl text-xl md:mb-7 mb-5'>
                        Vi vill gärna prata med dig. Lämna dina uppgifter nedan eller maila
                        <a href='mailto:hej@podcat.se' className=' text-[#0000FF] hover:underline ml-1'>hej@podcat.se</a>
                        {' '}så hör vi av oss.
                    </h2>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center w-full md:gap-10 gap-5'>
                    <div className='border-1 border-gray-300 rounded-xl md:w-4xl w-full md:h-150 bg-white '>
                        <div className='flex flex-col h-full md:p-5 p-3'>
                            <input className='w-full border-1 border-gray-300 rounded-xl h-12 my-3 md:text-xl px-4' placeholder='Namn*' />
                            <input className='w-full border-1 border-gray-300 rounded-xl h-12 my-3 md:text-xl px-4' placeholder='E-post eller telefon*' />
                            <textarea
                                id='meddelande'
                                className='w-full border-1 border-gray-300 min-h-[100px] max-h-[335px] my-3 md:text-xl px-4 py-2 pb-5 resize-none md:resize-y rounded-xl'
                                placeholder='Meddelande...'
                            />
                            <div className='flex justify-center mt-auto'>
                                <button className='bg-black text-white rounded-xl h-10 w-35 cursor-pointer m-3 md:m-0'>Skicka</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={poddr} className='md:size-150 rounded-xl' alt='Podcat image'></img>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Contact;