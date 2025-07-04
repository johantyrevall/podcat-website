import {useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [atTop, setAtTop] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

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

    const handleNavClick = (e: React.MouseEvent, section: string) => {
        if (location.pathname === '/') {
            e.preventDefault();
            const el = document.getElementById(section);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Let Link do its job (navigate to /#section)
        }
    };

    return (
        <header className={`sticky top-0 z-50 bg-white transition-transform duration-300
                    ${show ? '' : '-translate-y-full'}
                    ${atTop ? '' : 'shadow-md'}`}>
            <div className='flex flex-row justify-start items-center p-10 gap-x-8 h-25'>
                <Link to="/" className='text-3xl font-semibold hover:text-gray-800 transition-colors'>Podcat</Link>
                <Link to="/#services" className='text-lg cursor-pointer hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'services')}>Tjänster</Link>
                <Link to="/#pricing" className='text-lg cursor-pointer hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'pricing')}>Priser</Link>
                <Link to="/#sample" className='text-lg cursor-pointer hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'sample')}>Provklippning</Link>
                <Link to="/#faq" className='text-lg cursor-pointer hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'faq')}>FAQ</Link>
                <Link to="/#contact" className='text-lg cursor-pointer hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'contact')}>Kontakt</Link>
            </div>
        </header>
    );
}

export default Header;