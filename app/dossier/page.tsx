'use client';

import { useState } from 'react';
import FilterTabs from '../../components/FIlterTabs';
import dossierData from '../../data/dossier.json';

export default function DossierPage() {
    const [activeSection, setActiveSection] = useState('antecedents');

    const { patient, antecedents, allergies, traitements } = dossierData;

    const sections = [
        { key: 'antecedents', label: 'Antécédents', count: antecedents.length },
        { key: 'traitements', label: 'Traitements', count: traitements.length },
        { key: 'allergies', label: 'Allergies', count: allergies.length },
    ];

    const formatDate = (dateStr: string) => {
        if (dateStr === 'Antécédent familial' || dateStr === 'Information déclarée') {
            return dateStr;
        }
        return new Date(dateStr).toLocaleDateString('fr-FR');
    };

    const AntecedentsSection = () => (
        <div className="space-y-4">
            {antecedents.map((antecedent, index) => (
                <div
                    key={antecedent.id}
                    className="card animate-slideUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {antecedent.description}
                            </h3>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                                antecedent.type === 'Chirurgical'
                                    ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                    : antecedent.type === 'Médical'
                                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            }`}>
                {antecedent.type}
              </span>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <p><span className="font-medium">Date:</span> {formatDate(antecedent.date)}</p>
                        <p><span className="font-medium">Médecin:</span> {antecedent.medecin}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    const TraitementsSection = () => (
        <div className="space-y-4">
            {traitements.map((traitement, index) => (
                <div
                    key={traitement.id}
                    className="card animate-slideUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {traitement.medicament}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {traitement.indication}
                            </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            traitement.statut === 'actif'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                        }`}>
              {traitement.statut === 'actif' ? 'Actif' : 'Terminé'}
            </span>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <p><span className="font-medium">Posologie:</span> {traitement.posologie}</p>
                        <p><span className="font-medium">Début:</span> {formatDate(traitement.dateDebut)}</p>
                        {traitement.dateFin && (
                            <p><span className="font-medium">Fin:</span> {formatDate(traitement.dateFin)}</p>
                        )}
                        <p><span className="font-medium">Prescrit par:</span> {traitement.medecin}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    const AllergiesSection = () => (
        <div className="space-y-4">
            {allergies.map((allergie, index) => (
                <div
                    key={allergie.id}
                    className="card animate-slideUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {allergie.allergene}
                            </h3>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            allergie.gravite === 'Modérée'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : allergie.gravite === 'Légère'
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
              {allergie.gravite}
            </span>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div>
                            <span className="font-medium">Réactions:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {allergie.reactions.map((reaction, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs"
                                    >
                    {reaction}
                  </span>
                                ))}
                            </div>
                        </div>
                        <p><span className="font-medium">Diagnostiqué le:</span> {formatDate(allergie.dateDiagnostic)}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'antecedents':
                return <AntecedentsSection />;
            case 'traitements':
                return <TraitementsSection />;
            case 'allergies':
                return <AllergiesSection />;
            default:
                return <AntecedentsSection />;
        }
    };

    return (
        <div className="container-custom py-8">
            {/* Header */}
            <div className="mb-8 animate-fadeIn">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Mon dossier médical
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Consultez votre historique médical complet
                </p>
            </div>

            {/* Informations patient */}
            <div className="card mb-8 animate-slideUp">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Informations personnelles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Nom complet</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                            {patient.prenom} {patient.nom}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Date de naissance</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                            {formatDate(patient.dateNaissance)}
                        </p>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Numéro de sécurité sociale</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                            {patient.numeroSecuriteSociale}
                        </p>
                    </div>
                </div>
            </div>

            {/* Onglets de navigation */}
            <div className="mb-8">
                <FilterTabs
                    tabs={sections}
                    activeTab={activeSection}
                    onTabChange={setActiveSection}
                />
            </div>

            {/* Contenu de la section active */}
            <div className="animate-fadeIn">
                {renderActiveSection()}
            </div>

            {/* Alerte importante */}
            {activeSection === 'allergies' && allergies.length > 0 && (
                <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg animate-fadeIn">
                    <div className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-red-600 dark:text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.598 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <div>
                            <h3 className="font-semibold text-red-900 dark:text-red-100 mb-1">
                                ⚠️ Allergies importantes
                            </h3>
                            <p className="text-sm text-red-800 dark:text-red-200">
                                Assurez-vous d'informer tous vos professionnels de santé de vos allergies avant tout traitement.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}