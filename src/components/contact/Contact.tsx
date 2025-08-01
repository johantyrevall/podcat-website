import React from 'react';
import { useState } from 'react';
import poddr from '../../assets/poddr.png';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [captchaError, setCaptchaError] = useState('');
  const [emailError, setEmailError] = useState('');

  const formAction = 'https://docs.google.com/forms/d/e/1FAIpQLSdFtEsqdehnrmol_nUzW8k0uBSlDacBg8P2MkWvRkp0l-X2Wg/formResponse';
  const siteKey = '6Le3FJIrAAAAAPt13NMewne6bjnmS_OWdgFh0DVo'
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmailOrPhone(email)) {
      setEmailError('Ange en giltig e-postadress eller ett telefonnummer.');
      return;
    }

    if (!captchaValue) {
      setCaptchaError('Bekräfta att du inte är en robot.');
      return;
    }

    const formData = new FormData();
    formData.append('entry.1276802246', name);
    formData.append('entry.1125833566', email);
    formData.append('entry.1685357403', message);

    await fetch(formAction, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    });

    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
    setCaptchaError('');
    setEmailError('');
  };

  function isValidEmailOrPhone(input: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+?\d{1,4}[\s.-]?)?(\(?\d{2,4}\)?[\s.-]?)?\d{5,10}$/;

    return emailRegex.test(input) || phoneRegex.test(input);
  }

  return (
    <div id='contact' className='flex flex-col items-center md:min-h-screen md:py-20 py-10 bg-[#F0F0F0]'>
      <div className='w-6/7'>
        <div className='md:pt-20 md:w-150 self-start'>
          <h2 className='md:text-2xl text-xl md:mb-7 mb-5 px-2'>
            Vi vill gärna prata med dig. Lämna dina uppgifter nedan eller maila
            <a href='mailto:hej@podcat.se' className='text-[#0000FF] hover:underline ml-1'>hej@podcat.se</a>
            {' '}så hör vi av oss.
          </h2>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center w-full md:gap-10 gap-5'>
          <form onSubmit={handleSubmit} className='border-1 border-gray-300 rounded-xl md:w-4xl w-full md:h-150 bg-white flex flex-col h-full md:p-5 p-3'>
            <input
              required
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full border-1 border-gray-300 rounded-xl h-12 my-3 md:text-xl px-4'
              placeholder='Namn*'
            />
            <input
              required
              type='text'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError('');
              }}
              className='w-full border-1 border-gray-300 rounded-xl h-12 my-3 md:text-xl px-4'
              placeholder='E-post eller telefon*'
            />
            {emailError && <p className="text-red-600 text-sm -mt-2 mb-3">{emailError}</p>}
            <textarea
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full border-1 border-gray-300 md:h-[290px] h-[100px] md:text-xl px-4 py-2 pb-5 resize-none rounded-xl ${emailError ? '-mt-3' : 'mt-3'}`}
              placeholder='Meddelande...'
            />
            <div className='flex md:flex-row flex-col md:items-end items-center mt-auto gap-x-4 relative'>
              <div className='md:mt-0 mt-1 md:mb-2 mb-3'>
                <div style={{ height: captchaError ? 'auto' : '20px' }}>
                  {captchaError && <p className="text-red-600 text-sm">{captchaError}</p>}
                </div>
                <div style={{ transform: "", transformOrigin: "0 0" }}>
                  {!sent && (
                    <ReCAPTCHA
                      sitekey={siteKey}
                      onChange={(value: string | null) => {
                        setCaptchaValue(value);
                        if (value) setCaptchaError('');
                      }}
                      className='flex justify-start'
                      size='normal'
                    />
                  )}
                </div>
              </div>
              <div className='md:absolute md:left-1/2 md:transform md:-translate-x-1/2'>
                {!sent && (
                  <button type='submit' className='bg-black text-white rounded-xl h-10 w-35 cursor-pointer m-3 md:m-2'>
                    Skicka
                  </button>
                )}
                {sent && <p className='text-green-600 text-center w-full'>Tack för ditt meddelande! Vi har tagit emot det och återkommer till dig så snart vi kan.</p>}
              </div>
            </div>
          </form>
          <div>
            <img src={poddr} className='md:size-150 rounded-xl' alt='Podcat image' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
