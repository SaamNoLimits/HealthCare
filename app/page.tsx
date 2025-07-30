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
                            <Link href="/accueil" className="btn-primary text-lg px-8 py-4">
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
            <div className="bg-gray-900 py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Left Section - Text */}
                        <div className="text-center lg:text-left">
                            <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                                Fonctionnalités
                            </h3>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Les blocs d'une plateforme médicale puissante
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Notre équipe médicale vous accompagne pour mieux comprendre vos besoins et vous aider dans votre parcours de santé personnalisé.
                            </p>
                            <Link href="/accueil" className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300">
                                Commencer gratuitement
                            </Link>
                        </div>

                        {/* Right Section - Feature Cards Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* Top Left - Suivi */}
                            <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src="/suivi.gif"
                                        alt="Suivi Médical"
                                        width={80}
                                        height={80}
                                        className="object-contain hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Suivi Médical</h3>
                                <p className="text-gray-400 text-sm">
                                    Gérez un suivi médical illimité avec historique complet et analyses détaillées
                                </p>
                            </div>

                            {/* Top Right - Rendez-vous */}
                            <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg transform rotate-1">
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src="/rendez.png"
                                        alt="Rendez-vous"
                                        width={80}
                                        height={80}
                                        className="object-contain hover:scale-110 hover:-rotate-3 transition-all duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Rendez-vous</h3>
                                <p className="text-gray-400 text-sm">
                                    Planifiez et gérez vos rendez-vous médicaux avec contrôle total et rappels automatiques
                                </p>
                            </div>

                            {/* Bottom Left - Conseils */}
                            <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src="/conseils.gif"
                                        alt="Conseils Santé"
                                        width={80}
                                        height={80}
                                        className="object-contain hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer"
                                    />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Conseils Santé</h3>
                                <p className="text-gray-400 text-sm">
                                    Recevez des recommandations personnalisées pour optimiser votre bien-être quotidien
                                </p>
                            </div>

                            {/* Bottom Right - Security */}
                            <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg">
                                <div className="flex justify-center mb-4">
                                    <svg className="w-20 h-20 text-teal-400 hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Sécurité</h3>
                                <p className="text-gray-400 text-sm">
                                    Vos données sont protégées et chiffrées avec les plus hauts standards de sécurité
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="bg-gray-950 py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Section - Logo Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative">
                                <Image
                                    src="/img_carousel.16270e81-removebg-preview.png"
                                    alt="MediCare"
                                    width={800}
                                    height={800}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Right Section - Text and Button */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl font-bold mb-6">
                                <span className="text-white">À propos de</span>
                                <span className="text-emerald-400 ml-2">MediCare</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                MediCare révolutionne l'accès aux soins de santé en offrant une plateforme 
                                innovante qui connecte patients et professionnels de santé. Notre mission 
                                est de simplifier la gestion médicale tout en garantissant la sécurité 
                                et la confidentialité de vos données de santé.
                            </p>
                            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300">
                                En savoir plus
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
} 