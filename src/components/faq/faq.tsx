import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from "react-router-dom";

function Faq() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: 'Hur går det till när Podcat klipper vår podcast? ',
      answer: 'Ni laddar upp och skickar er ljudfil till oss på Podcat via valfri fildelningstjänst. Vi klipper, redigerar och lägger till jinglar efter era önskemål. Därefter skickar vi över det färdigställda avsnittet - helt redo för publicering. ',
    },
    {
      id: 2,
      question: 'Hur lång tid tar det att få min podcast klippt?',
      answer: 'Från det att du har skickat över din ljudfil till att Podcat skickar tillbaka ett publiceringsklart avsnitt tar i regel 1-2 arbetsdagar (men oftast mycket kortare tid än så). Vid klippning får du alltid en leveranstid specificerad som du kan ta ställning till före beställning. Har du bråttom? Låt oss veta det.',
    },
    {
      id: 3,
      question: 'Vad ingår i er redigering?',
      answer: (
        <>
          Vi klipper bort felsägningar, pauser och störande ljud. Ljudspåren synkroniseras och optimeras med mix, kompression och brusreducering. Allt anpassas efter dina önskemål för ett professionellt poddavsnitt. Läs mer om vår{' '}
          <Link to='/#services' className='text-[#0000FF]'>
            podcastredigering här
          </Link>.
        </>
      ),
    },
    {
      id: 4,
      question: 'Betalar jag per timme eller per avsnitt?',
      answer: 'Podcat erbjuder klippning baserat på hur lång din råa ljudfil är. Kostnaden är alltså inte baserad på hur lång tid det tar för oss att klippa din podcast.',
    },
    {
      id: 5,
      question: 'Hur fungerar prenumeration?',
      answer: 'Om du publicerar avsnitt regelbundet kan du teckna en prenumeration hos oss. Då betalar du ett fast månadspris och varje poddavsnitt blir billigare jämfört med att köpa dem enskilt. Prenumerationen passar perfekt för dig som vill sänka kostnaden per avsnitt och slippa tänka på engångsbetalningar.',
    },
    {
      id: 6,
      question: 'Kan jag testa er tjänst gratis?',
      answer: 'Ja! Vi erbjuder alla nya kunder ett kostnadsfritt avsnitt.',
    },

    {
      id: 7,
      question: 'Kan det tillkomma kostnader?',
      answer: 'Nej, det tillkommer inga kostnader under tiden som vi klipper er podd. Redigering efter feedback eller sena önskemål ingår i tjänsten, och du vet alltid exakt hur mycket du kommer behöva betala när du gör din beställning. ',
    },
  ]

  return (
    <div id="faq" className='flex flex-col items-center md:min-h-screen py-10 md:py-20 bg-[#E9EBF8]'>
      <div className='md:w-2/4 md:pt-20 mx-5 md:mx-0'>
        <h2 className='text-3xl md:text-6xl font-medium md:mt-10 mb-5 self-start'>FAQ - Vanliga frågor</h2>
        <div className=''>
          {questions.map((q) => (
            <motion.div
              key={q.id}
              className='flex flex-col md:text-lg border-b-1 border-[#00000080] py-4'
              layout
            >
              <div
                className='flex justify-between items-center gap-4 cursor-pointer'
                onClick={() =>
                  setActiveQuestion(activeQuestion === q.id ? null : q.id)
                }
              >
                <p className={`${activeQuestion === q.id ? 'font-semibold' : ''}`}>
                  {q.question}
                </p>
                <button className='shrink-0 border-1 border-[#00000080] rounded-xl aspect-square w-10 flex items-center justify-center text-lg cursor-pointer hover:bg-[#F0F0F0]'>
                  {activeQuestion === q.id ? (
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ rotate: 45 }}
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </motion.div>
                  )}
                </button>
              </div>
              <AnimatePresence mode="wait">
                {activeQuestion === q.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p>{q.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
