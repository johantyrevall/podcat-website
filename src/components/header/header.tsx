import {useState, useEffect } from 'react'

function Header() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [atTop, setAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setAtTop(window.scrollY === 0);
            
            if (window.scrollY < lastScrollY) {
                setShow(true);
            } else if (window.scrollY > lastScrollY) {
                setShow(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`sticky top-0 z-50 bg-white transition-transform duration-300
                    ${show ? '' : '-translate-y-full'}
                    ${atTop ? '' : 'shadow-md'}`}>
            <div className='flex flex-row justify-start items-center p-10 gap-x-8 h-25'>
                <a href='#' className='text-3xl font-semibold hover:text-gray-800 transition-colors'>Podcat</a>
                <a href='#services' className='text-lg cursor-pointer hover:text-gray-800 transition-colors'>Tjänster</a>
                <a href='#pricing' className='text-lg cursor-pointer hover:text-gray-800 transition-colors'>Priser</a>
                <a href='#sample' className='text-lg cursor-pointer hover:text-gray-800 transition-colors'>Provklippning</a>
                <a href='#faq' className='text-lg cursor-pointer hover:text-gray-800 transition-colors'>FAQ</a>
                <a href='#contact' className='text-lg cursor-pointer hover:text-gray-800 transition-colors'>Kontakt</a>
            </div>
        </header>
    );
}

export default Header;