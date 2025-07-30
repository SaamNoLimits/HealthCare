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
        <div className="min-h-screen">
            {/* Section Accueil */}
            <section id="accueil" className="container-custom py-20">
                <div className="mb-12 animate-fadeIn">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {getGreeting()}, {patient.prenom} 👋
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Bienvenue sur votre portail de suivi médical personnalisé
                        </p>
                    </div>
                </div>

                {/* Statistiques rapides */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="card-elevated animate-slideUp group">
                        <div className="flex items-center">
                            <div className="p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-400">Prochains RDV</p>
                                <p className="text-3xl font-bold text-white">
                                    {rendezvousData.rendezvous.filter(rv => rv.statut === 'a_venir').length}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-elevated animate-slideUp group" style={{ animationDelay: '0.1s' }}>
                        <div className="flex items-center">
                            <div className="p-4 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-400">Traitements actifs</p>
                                <p className="text-3xl font-bold text-white">
                                    {dossierData.traitements.filter(t => t.statut === 'actif').length}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-elevated animate-slideUp group" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center">
                            <div className="p-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-400">Allergies</p>
                                <p className="text-3xl font-bold text-white">
                                    {dossierData.allergies.length}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-elevated animate-slideUp group" style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-center">
                            <div className="p-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-400">Recommandations</p>
                                <p className="text-3xl font-bold text-white">
                                    {recommandationsData.recommandations.length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Prochain rendez-vous */}
                    <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white">
                                Prochain rendez-vous
                            </h2>
                        </div>

                        {dernierRendezVous ? (
                            <AppointmentCard rendezvous={dernierRendezVous} />
                        ) : (
                            <div className="card text-center py-12">
                                <div className="w-16 h-16 bg-gradient-to-r from-gray-600/20 to-gray-700/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Aucun rendez-vous à venir
                                </p>
                                <a href="#rendez-vous" className="btn-primary inline-block">
                                    Prendre rendez-vous
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Recommandation du jour */}
                    <div className="animate-slideUp" style={{ animationDelay: '0.5s' }}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white">
                                Conseil santé du jour
                            </h2>
                        </div>

                        <HealthTipCard recommandation={recommandationDuJour} compact />
                    </div>
                </div>
            </section>

            {/* Section Rendez-vous */}
            <section id="rendez-vous" className="container-custom py-20 bg-gray-900/30">
                <div className="mb-8 animate-fadeIn">
                    <h2 className="text-3xl font-bold text-white mb-4 text-center">
                        Mes Rendez-vous
                    </h2>
                    <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto">
                        Consultez et gérez vos rendez-vous médicaux
                    </p>
                </div>

                <div className="space-y-6">
                    {rendezvousData.rendezvous.map((rendezvous, index) => (
                        <AppointmentCard
                            key={rendezvous.id}
                            rendezvous={rendezvous}
                            className="animate-slideUp"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        />
                    ))}
                </div>
            </section>

            {/* Section Dossier médical */}
            <section id="dossier" className="container-custom py-20">
                <div className="mb-8 animate-fadeIn">
                    <h2 className="text-3xl font-bold text-white mb-4 text-center">
                        Mon Dossier Médical
                    </h2>
                    <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto">
                        Consultez votre historique médical complet
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Informations patient */}
                    <div className="card-elevated animate-slideUp">
                        <h3 className="text-xl font-bold text-white mb-4">Informations Patient</h3>
                        <div className="space-y-3">
                            <div>
                                <p className="text-gray-400 text-sm">Nom complet</p>
                                <p className="text-white font-medium">{patient.nom} {patient.prenom}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Date de naissance</p>
                                <p className="text-white font-medium">{patient.dateNaissance}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Groupe sanguin</p>
                                <p className="text-white font-medium">{patient.groupeSanguin}</p>
                            </div>
                        </div>
                    </div>

                    {/* Antécédents */}
                    <div className="card-elevated animate-slideUp" style={{ animationDelay: '0.1s' }}>
                        <h3 className="text-xl font-bold text-white mb-4">Antécédents</h3>
                        <div className="space-y-3">
                            {dossierData.antecedents.map((antecedent, index) => (
                                <div key={index} className="border-l-4 border-emerald-500 pl-3">
                                    <p className="text-white font-medium">{antecedent.type}</p>
                                    <p className="text-gray-400 text-sm">{antecedent.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Allergies */}
                    <div className="card-elevated animate-slideUp" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-xl font-bold text-white mb-4">Allergies</h3>
                        <div className="space-y-3">
                            {dossierData.allergies.map((allergie, index) => (
                                <div key={index} className="border-l-4 border-amber-500 pl-3">
                                    <p className="text-white font-medium">{allergie.allergene}</p>
                                    <p className="text-gray-400 text-sm">Gravité: {allergie.gravite}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Recommandations */}
            <section id="recommendations" className="container-custom py-20 bg-gray-900/30">
                <div className="mb-8 animate-fadeIn">
                    <h2 className="text-3xl font-bold text-white mb-4 text-center">
                        Recommandations Santé
                    </h2>
                    <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto">
                        Conseils personnalisés pour votre bien-être
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommandationsData.recommandations.map((recommandation, index) => (
                        <HealthTipCard
                            key={recommandation.id}
                            recommandation={recommandation}
                            className="animate-slideUp"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}