import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { act, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

function Faq() {
  const [activeQuestion, setActiveQuestion] = useState<number | null> (null);

  const questions = [
    {
      id: 1,
      question: 'Vad ingår i er redigering?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      question: 'Hur fungerar det rent praktiskt?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      question: 'Hur lång tid tar det att få mitt avsnitt klart?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 4,
      question: 'Betalar jag per timme eller per avsnitt?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 5,
      question: 'Hur startar jag ett samarbete med er?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ]

  return (
    <div id="faq" className='flex flex-col items-center h-screen bg-[#E9EBF8]'>
      <div className='w-2/4 pt-20'>
        <h2 className='text-6xl font-medium mt-10 mb-5 self-start'>FAQ - Vanliga frågor</h2>
        <div className=''>
          {questions.map((q) => (
            <div key={q.id}
              className='flex flex-col text-lg border-b-1 border-[#00000080] py-4'>
              <div className='flex flex-row items-center'>
                <p className={`${activeQuestion === q.id ? 'font-semibold' : ''}`}>
                  {q.question}
                </p>
                <button className='ml-auto border-1 border-[#00000080] rounded-xl aspect-square w-10 flex items-center justify-center
                text-xl cursor-pointer hover:bg-[#F0F0F0]'
                onClick={() => 
                  setActiveQuestion(activeQuestion === q.id ? null : q.id)
                }>
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
              <AnimatePresence>
                {activeQuestion === q.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2"
                  >
                    <p>{q.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
