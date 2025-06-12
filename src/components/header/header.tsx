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
                <h1 className='text-3xl font-semibold'>Podcat</h1>
                <h2 className='text-lg'>Tjänster</h2>
                <h2 className='text-lg'>Priser</h2>
                <h2 className='text-lg'>Provklippning</h2>
                <h2 className='text-lg'>FAQ</h2>
                <h2 className='text-lg'>Kontakt</h2>
            </div>
        </header>
    );
}

export default Header;