import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaXmark } from 'react-icons/fa6';

function Header() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [atTop, setAtTop] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

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

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

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

    const menuItems = [
        { label: 'Tjänster', to: '/#services', delay: '50ms', id: 'services' },
        { label: 'Priser', to: '/#pricing', delay: '100ms', id: 'pricing' },
        { label: 'Provklippning', to: '/#sample', delay: '150ms', id: 'sample' },
        { label: 'FAQ', to: '/#faq', delay: '200ms', id: 'faq' },
        { label: 'Kontakt', to: '/#contact', delay: '250ms', id: 'contact' },
    ];

    return (
        <header className={`sticky top-0 z-50 bg-white transition-transform duration-300
                    ${show ? '' : '-translate-y-full'}
                    ${(!atTop) ? 'shadow-md' : ''}`}>
            <div className="flex flex-row items-center p-6 md:p-10 h-20 md:h-25 ">
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
                    className="md:hidden text-2xl text-black focus:outline-none w-10 h-10 flex items-center justify-center"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Open menu"
                >
                    {mobileMenuOpen ? <FaXmark className='text-3xl' /> : <FaBars />}
                </button>
            </div>
            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-x-0 top-20 bottom-0 bg-opacity-40 z-40 md:hidden transition-all duration-300
                ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileMenuOpen(false)}>
                <nav
                    className="absolute top-0 left-0 w-full h-[calc(100vh-5rem)] bg-white border-t border-gray-200 shadow-lg flex flex-col pt-5 gap-y-6 px-7 text-lg"
                    onClick={e => e.stopPropagation()}>
                    <button
                        className="absolute top-6 right-6 text-2xl text-black focus:outline-none"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Close menu">
                    </button>
                    {menuItems.map(({ label, to, delay, id }) => (
                        <Link
                            key={id}
                            to={to}
                            className={`hover:text-gray-800 transform transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                            style={{ transitionDelay: delay }}
                            onClick={e => handleNavClick(e, id)}>
                            {label}
                        </Link>
                    ))}

                    <div className='absolute bottom-20'>
                        <a
                            href='mailto:hej@podcat.se'
                            className={`text-black hover:underline hover:text-gray-800 transform transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                            style={{ transitionDelay: '300ms' }}>
                            hej@podcat.se
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;