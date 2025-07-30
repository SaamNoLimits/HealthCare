import Link from 'next/link';
import Image from 'next/image';

export default function MediCarePage() {
    return (
        <div className="min-h-screen bg-gray-950">
            {/* Hero Section with Background Image */}
            <div className="relative min-h-screen">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src="/656301b7ee779bc6fb6cb469fc7596a5.gif"
                        alt="Healthcare background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gray-950/70"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex items-center justify-center min-h-screen">
                    <div className="container-custom text-center">


                        {/* Main Title */}
                        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-slideUp">
                            MediCare
                        </h1>

                        {/* Subtitle */}
                        <p className="text-2xl text-gray-300 mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
                            Votre portail de santé connecté
                        </p>

                        {/* Description */}
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 animate-slideUp" style={{ animationDelay: '0.4s' }}>
                            Accédez à votre dossier médical, gérez vos rendez-vous et recevez des recommandations personnalisées pour votre bien-être
                        </p>

                        {/* Call to Action */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{ animationDelay: '0.6s' }}>
                            <Link href="/" className="btn-primary text-lg px-8 py-4">
                                Accéder au portail
                            </Link>
                            <Link href="/rendez-vous" className="btn-secondary text-lg px-8 py-4">
                                Mes rendez-vous
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container-custom py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card-elevated text-center p-8 animate-slideUp group" style={{ animationDelay: '0.8s' }}>
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Image
                                src="/suivi.gif"
                                alt="Suivi Médical"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Suivi Médical</h3>
                        <p className="text-gray-400">Accédez à votre dossier médical complet en toute sécurité</p>
                    </div>

                    <div className="card-elevated text-center p-8 animate-slideUp group" style={{ animationDelay: '1s' }}>
                        <div className="w-20 h-20 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Image
                                src="/rendez.png"
                                alt="Gestion RDV"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Gestion RDV</h3>
                        <p className="text-gray-400">Planifiez et gérez vos rendez-vous médicaux facilement</p>
                    </div>

                    <div className="card-elevated text-center p-8 animate-slideUp group" style={{ animationDelay: '1.2s' }}>
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Image
                                src="/conseils.gif"
                                alt="Conseils Santé"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Conseils Santé</h3>
                        <p className="text-gray-400">Recevez des recommandations personnalisées pour votre bien-être</p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gray-900/50 py-20">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">MediCare en chiffres</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-400 mb-2">10k+</div>
                            <div className="text-gray-400">Patients satisfaits</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                            <div className="text-gray-400">Établissements partenaires</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                            <div className="text-gray-400">Support disponible</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-teal-400 mb-2">99.9%</div>
                            <div className="text-gray-400">Sécurité garantie</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 