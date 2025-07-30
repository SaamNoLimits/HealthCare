import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-950/80 backdrop-blur-md border-t border-gray-800/50 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo et description */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="MediCare Logo"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">MediCare</h3>
                                <p className="text-sm text-gray-400">Portail Patient</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            Votre carnet de suivi médical digitalisé. Accédez à vos rendez-vous, 
                            consultez votre dossier médical et recevez des recommandations personnalisées.
                        </p>
                    </div>

                    {/* Liens rapides */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/rendez-vous" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                                    Rendez-vous
                                </Link>
                            </li>
                            <li>
                                <Link href="/dossier" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                                    Dossier médical
                                </Link>
                            </li>
                            <li>
                                <Link href="/recommendations" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                                    Recommandations
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="mailto:support@medicare.com" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                                    support@medicare.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+33123456789" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                                    +33 1 23 45 67 89
                                </a>
                            </li>
                            <li>
                                <span className="text-gray-400 text-sm">
                                    Lun-Ven: 9h-18h
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Séparateur */}
                <div className="border-t border-gray-800/50 my-8"></div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 MediCare. Tous droits réservés.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                            Confidentialité
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                            Conditions d'utilisation
                        </Link>
                        <Link href="/help" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                            Aide
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;