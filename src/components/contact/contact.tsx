import React from 'react';
import { useState } from 'react';
import poddr from '../../assets/poddr.png';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const formAction = 'https://docs.google.com/forms/d/e/1FAIpQLSdFtEsqdehnrmol_nUzW8k0uBSlDacBg8P2MkWvRkp0l-X2Wg/formResponse';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmailOrPhone(email)) {
      alert('Ange en giltig e-postadress eller ett telefonnummer.');
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
  };

  function isValidEmailOrPhone(input: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+?\d{1,4}[\s.-]?)?(\(?\d{2,4}\)?[\s.-]?)?\d{5,10}$/;
  
    return emailRegex.test(input) || phoneRegex.test(input);
  }

  return (
    <div id="contact" className="flex flex-col items-center md:min-h-screen md:py-20 py-10 bg-[#F0F0F0]">
      <div className="w-4/5">
        <div className="md:pt-20 md:w-150 self-start">
          <h2 className="md:text-2xl text-xl md:mb-7 mb-5">
            Vi vill gärna prata med dig. Lämna dina uppgifter nedan eller maila
            <a href="mailto:hej@podcat.se" className="text-[#0000FF] hover:underline ml-1">hej@podcat.se</a>
            {' '}så hör vi av oss.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full md:gap-10 gap-5">
          <form onSubmit={handleSubmit} className="border-1 border-gray-300 rounded-xl md:w-4xl w-full md:h-150 bg-white flex flex-col h-full md:p-5 p-3">
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-1 border-gray-300 rounded-xl h-12 my-3 md:text-xl px-4"
              placeholder="Namn*"
            />
            <input
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-1 border-gray-300 rounded-xl h-12 my-3 md:text-xl px-4"
              placeholder="E-post eller telefon*"
            />
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border-1 border-gray-300 min-h-[100px] max-h-[335px] my-3 md:text-xl px-4 py-2 pb-5 resize-none md:resize-y rounded-xl"
              placeholder="Meddelande..."
            />
            <div className="flex justify-center mt-auto">
              {!sent && (
              <button type="submit" className="bg-black text-white rounded-xl h-10 w-35 cursor-pointer m-3 md:m-0">
              Skicka
            </button>
              )}
              {sent && <p className="text-green-600 justify-center">Tack för ditt meddelande! Vi har tagit emot det och återkommer till dig så snart vi kan.</p>}
            </div>
          </form>
          <div>
            <img src={poddr} className="md:size-150 rounded-xl" alt="Podcat image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
