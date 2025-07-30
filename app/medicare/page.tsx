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

            {/* First Section - Why MediCare exists */}
            <div className="bg-gray-950 py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Section - Text */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl font-bold mb-6 text-white">
                                Pourquoi MediCare existe
                            </h2>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                Les patients veulent un accès facile à leurs données médicales, 
                                les médecins veulent une plateforme intuitive, tout le monde 
                                a besoin de comprendre et de gérer efficacement les informations 
                                de santé. Mais comment organiser toutes ces informations et 
                                accomplir quelque chose d'utile et d'utilisable ?
                            </p>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                MediCare vous apprend à penser et agir comme un professionnel 
                                de santé — consulter, analyser, créer des dossiers parfaits, 
                                gérer les rendez-vous et rendre le tout beau, utilisable et 
                                dynamique, quel que soit le type de projet sur lequel vous 
                                travaillez.
                            </p>
                            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300">
                                Découvrir MediCare
                            </button>
                        </div>

                        {/* Right Section - Image with background */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-purple-400/20 rounded-3xl flex items-center justify-center p-8">
                                    <Image
                                        src="/suivi.gif"
                                        alt="Suivi Médical"
                                        width={320}
                                        height={320}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section - Why you need MediCare */}
            <div className="bg-gray-900 py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Section - Image with background */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative">
                                <div className="w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-purple-400/20 rounded-3xl flex items-center justify-center p-8">
                                    <Image
                                        src="/conseils.gif"
                                        alt="Conseils Santé"
                                        width={320}
                                        height={320}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Text */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl font-bold mb-6 text-white">
                                Pourquoi vous avez besoin de MediCare
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Bien que vous puissiez choisir n'importe quel nombre de 
                                plateformes médicales pour apprendre des compétences et 
                                des applications, le problème est que les applications 
                                médicales changent, de nouveaux systèmes sont introduits, 
                                et les rôles évoluent, mais le problème fondamental de 
                                communication, comment et quoi apprendre et comment 
                                surmonter les angles morts de connaissances reste.
                            </p>
                            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300">
                                Commencer maintenant
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="bg-gray-950 py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Section - Circular Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative">
                                <div className="w-80 h-80 rounded-full border-4 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)] overflow-hidden">
                                    <Image
                                        src="/img_carousel.16270e81-removebg-preview.png"
                                        alt="MediCare"
                                        width={320}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                {/* Glow effect overlay */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-emerald-400/20 to-transparent pointer-events-none"></div>
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