import Link from 'next/link';
import Image from 'next/image';

export default function MediCarePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
            {/* Hero Section with Animation */}
            <div className="container-custom py-20">
                <div className="text-center mb-16 animate-fadeIn">
                    <div className="mb-8 animate-bounce">
                        <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                            <Image
                                src="/logo.png"
                                alt="MediCare Logo"
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    
                    <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-slideUp">
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            MediCare
                        </span>
                    </h1>
                    
                    <p className="text-2xl text-gray-300 mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
                        Votre portail de santé connecté
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
                        <Link href="/" className="btn-primary text-lg px-8 py-4">
                            Accéder au portail
                        </Link>
                        <Link href="/rendez-vous" className="btn-secondary text-lg px-8 py-4">
                            Mes rendez-vous
                        </Link>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="card-elevated text-center p-8 animate-slideUp group" style={{ animationDelay: '0.6s' }}>
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Suivi Médical</h3>
                        <p className="text-gray-400">Accédez à votre dossier médical complet en toute sécurité</p>
                    </div>

                    <div className="card-elevated text-center p-8 animate-slideUp group" style={{ animationDelay: '0.8s' }}>
                        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Gestion RDV</h3>
                        <p className="text-gray-400">Planifiez et gérez vos rendez-vous médicaux facilement</p>
                    </div>

                    <div className="card-elevated text-center p-8 animate-slideUp group" style={{ animationDelay: '1s' }}>
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Conseils Santé</h3>
                        <p className="text-gray-400">Recevez des recommandations personnalisées pour votre bien-être</p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-gray-900/50 rounded-2xl p-8 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
                    <h2 className="text-3xl font-bold text-white text-center mb-8">MediCare en chiffres</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-400 mb-2">10k+</div>
                            <div className="text-gray-400">Patients satisfaits</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                            <div className="text-gray-400">Établissements partenaires</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                            <div className="text-gray-400">Support disponible</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-teal-400 mb-2">99.9%</div>
                            <div className="text-gray-400">Sécurité garantie</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements Animation */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-400 rounded-full animate-pulse opacity-30"></div>
                <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full animate-pulse opacity-20" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 right-10 w-5 h-5 bg-teal-400 rounded-full animate-pulse opacity-25" style={{ animationDelay: '0.5s' }}></div>
            </div>
        </div>
    );
} 