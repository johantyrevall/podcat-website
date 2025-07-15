import {useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [atTop, setAtTop] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
            // navigate to /#section
        }
        setMobileMenuOpen(false); // close mobile menu on click
    };

    return (
        <header className={`sticky top-0 z-50 bg-white transition-transform duration-300
                    ${show ? '' : '-translate-y-full'}
                    ${atTop ? '' : 'shadow-md'}`}>
            <div className="flex flex-row items-center p-6 md:p-10 h-20 md:h-25">
                {/* Left: Logo and nav links */}
                <div className="flex flex-row items-center flex-grow">
                    <Link to="/" className="text-3xl font-semibold hover:text-gray-800 transition-colors mr-8">Podcat</Link>
                    <nav className="hidden md:flex flex-row gap-x-8 items-center">
                        <Link to="/#services" className='text-lg cursor-pointer hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'services')}>Tjänster</Link>
                        <Link to="/#pricing" className='text-lg cursor-pointer hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'pricing')}>Priser</Link>
                        <Link to="/#sample" className='text-lg cursor-pointer hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'sample')}>Provklippning</Link>
                        <Link to="/#faq" className='text-lg cursor-pointer hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'faq')}>FAQ</Link>
                        <Link to="/#contact" className='text-lg cursor-pointer hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'contact')}>Kontakt</Link>
                    </nav>
                </div>
                {/* Right: Burger menu */}
                <button
                    className="md:hidden text-2xl text-black focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Open menu"
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {/* Mobile menu overlay */}
            {mobileMenuOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden' onClick={() => setMobileMenuOpen(false)}>
                    <nav className='absolute top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg flex flex-col pt-24 gap-y-6 px-8 text-lg' onClick={e => e.stopPropagation()}>
                        <Link to="/#services" className='hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'services')}>Tjänster</Link>
                        <Link to="/#pricing" className='hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'pricing')}>Priser</Link>
                        <Link to="/#sample" className='hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'sample')}>Provklippning</Link>
                        <Link to="/#faq" className='hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'faq')}>FAQ</Link>
                        <Link to="/#contact" className='hover:text-gray-800 transition-colors' onClick={e => handleNavClick(e, 'contact')}>Kontakt</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;