import Link from 'next/link';
import AppointmentCard from '../components/AppointmentCard';
import HealthTipCard from '../components/HealthTipCard';
import rendezvousData from '../data/rendezvous.json';
import recommandationsData from '../data/recommendations.json';
import dossierData from '../data/dossier.json';

export default function HomePage() {
    // Récupérer le dernier rendez-vous
    const dernierRendezVous = rendezvousData.rendezvous
        .filter(rv => rv.statut === 'a_venir')
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

    // Récupérer la recommandation du jour (la plus récente)
    const recommandationDuJour = recommandationsData.recommandations
        .sort((a, b) => new Date(b.datePublication).getTime() - new Date(a.datePublication).getTime())[0];

    const patient = dossierData.patient;

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Bonjour';
        if (hour < 18) return 'Bon après-midi';
        return 'Bonsoir';
    };

    return (
        <div className="container-custom py-8">
            {/* Header de bienvenue */}
            <div className="mb-8 animate-fadeIn">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {getGreeting()}, {patient.prenom} 👋
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Bienvenue sur votre portail de suivi médical
                </p>
            </div>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="card animate-slideUp">
                    <div className="flex items-center">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Prochains RDV</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {rendezvousData.rendezvous.filter(rv => rv.statut === 'a_venir').length}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card animate-slideUp" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center">
                        <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                            <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Traitements actifs</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {dossierData.traitements.filter(t => t.statut === 'actif').length}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card animate-slideUp" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center">
                        <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                            <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Allergies</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {dossierData.allergies.length}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card animate-slideUp" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-center">
                        <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                            <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Recommandations</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {recommandationsData.recommandations.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Prochain rendez-vous */}
                <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Prochain rendez-vous
                        </h2>
                        <Link
                            href="/rendez-vous"
                            className="text-medical-primary hover:text-blue-700 font-medium text-sm"
                        >
                            Voir tous →
                        </Link>
                    </div>

                    {dernierRendezVous ? (
                        <AppointmentCard rendezvous={dernierRendezVous} />
                    ) : (
                        <div className="card text-center py-12">
                            <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-gray-500 dark:text-gray-400">
                                Aucun rendez-vous à venir
                            </p>
                            <Link href="/rendez-vous" className="btn-primary mt-4 inline-block">
                                Prendre rendez-vous
                            </Link>
                        </div>
                    )}
                </div>

                {/* Recommandation du jour */}
                <div className="animate-slideUp" style={{ animationDelay: '0.5s' }}>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Conseil santé du jour
                        </h2>
                        <Link
                            href="/recommandations"
                            className="text-medical-primary hover:text-blue-700 font-medium text-sm"
                        >
                            Voir toutes →
                        </Link>
                    </div>

                    <HealthTipCard recommandation={recommandationDuJour} compact />
                </div>
            </div>

            {/* Actions rapides */}
            <div className="mt-12 animate-slideUp" style={{ animationDelay: '0.6s' }}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Actions rapides
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href="/rendez-vous" className="card hover:shadow-lg transition-all duration-200 group">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:scale-110 transition-transform duration-200">
                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Mes rendez-vous
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Gérer mes consultations
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/dossier" className="card hover:shadow-lg transition-all duration-200 group">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg group-hover:scale-110 transition-transform duration-200">
                                <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Mon dossier médical
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Consulter mon historique
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/recommandations" className="card hover:shadow-lg transition-all duration-200 group">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg group-hover:scale-110 transition-transform duration-200">
                                <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Conseils santé
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Recommandations personnalisées
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}