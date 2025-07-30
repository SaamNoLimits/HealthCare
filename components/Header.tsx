'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import classNames from 'classnames';

const Header = () => {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();

    const navigation = [
        { name: 'Accueil', href: '/' },
        { name: 'Rendez-vous', href: '/rendez-vous' },
        { name: 'Dossier médical', href: '/dossier' },
        { name: 'Recommandations', href: '/recommendations' },
    ];

    return (
        <header className="bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/medicare" className="flex items-center space-x-3 group">
                            <Image
                                src="/img_carousel.16270e81-removebg-preview.png"
                                alt="MediCare Logo"
                                width={80}
                                height={80}
                                className="object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white">
                                    MediCare
                                </span>
                                <span className="text-xs text-gray-400">Portail Patient</span>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    'nav-link',
                                    pathname === item.href ? 'nav-link-active' : 'text-gray-300'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-xl text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 group"
                        aria-label="Changer le thème"
                    >
                        {theme === 'light' ? (
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        )}
                    </button>

                    {/* Mobile menu button */}
                    <button className="md:hidden p-3 rounded-xl text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;