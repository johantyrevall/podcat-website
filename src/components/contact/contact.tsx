import poddr from '../../assets/poddr.png'

function Contact() {
    return (
        <div id='contact' className='flex flex-col items-center min-h-screen py-20 bg-[#F0F0F0]'>
            <div className='w-4/5'>
                <div className='pt-20 w-150 self-start'>
                    <h2 className='text-2xl mb-7'>
                        Vi vill gärna prata med dig. Lämna dina uppgifter nedan eller maila 
                        <a href='mailto:hej@podcat.se' className=' text-[#0000FF] hover:underline ml-1'>hej@podcat.se</a>
                        {' '}så hör vi av oss.
                    </h2>
                </div>
                <div className='flex flex-row justify-between items-center w-full'>
                    <div className='border-1 border-gray-300 rounded-xl w-4xl h-150 bg-white '>
                        <div className='flex flex-col p-5'>
                        <input className='border-1 border-gray-300 rounded-xl h-12 m-3 text-xl px-4' placeholder='Namn*' />
                        <input className='border-1 border-gray-300 rounded-xl h-12 m-3 text-xl px-4' placeholder='E-post eller telefon*' />
                        <textarea
                            id='meddelande'
                            className='border-1 border-gray-300 min-h-[100px] max-h-[390px] m-3 text-xl px-4 py-2 pb-5 resize-y rounded-xl'
                            placeholder='Meddelande...'
                        />
                        </div>
                    </div>
                    <div>
                        <img src={poddr} className='size-150' alt='Podcat image'></img>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Contact;