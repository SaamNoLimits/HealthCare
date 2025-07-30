'use client';

import { useState } from 'react';
import AppointmentCard from '../../components/AppointmentCard';
import FilterTabs from '../../components/FIlterTabs';
import rendezvousData from '../../data/rendezvous.json';

export default function RendezVousPage() {
    const [activeFilter, setActiveFilter] = useState('tous');

    const rendezvous = rendezvousData.rendezvous;

    // Compter les rendez-vous par statut
    const countByStatus = {
        tous: rendezvous.length,
        a_venir: rendezvous.filter(rv => rv.statut === 'a_venir').length,
        passes: rendezvous.filter(rv => rv.statut === 'passe').length,
    };

    // Filtrer les rendez-vous selon le filtre actif
    const filteredRendezVous = rendezvous.filter(rv => {
        switch (activeFilter) {
            case 'a_venir':
                return rv.statut === 'a_venir';
            case 'passes':
                return rv.statut === 'passe';
            default:
                return true;
        }
    }).sort((a, b) => {
        // Trier par date (les plus récents en premier)
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const tabs = [
        { key: 'tous', label: 'Tous', count: countByStatus.tous },
        { key: 'a_venir', label: 'À venir', count: countByStatus.a_venir },
        { key: 'passes', label: 'Passés', count: countByStatus.passes },
    ];

    return (
        <div className="container-custom py-8">
            {/* Header */}
            <div className="mb-8 animate-fadeIn">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Mes rendez-vous
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Consultez et gérez vos rendez-vous médicaux
                </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="flex items-center space-x-4">
                    <button className="btn-primary">
                        Prendre rendez-vous
                    </button>
                    <button className="btn-secondary">
                        Annuler un rendez-vous
                    </button>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>
            {filteredRendezVous.length} rendez-vous {activeFilter === 'tous' ? 'au total' : activeFilter === 'a_venir' ? 'à venir' : 'passés'}
          </span>
                </div>
            </div>

            {/* Filtres */}
            <div className="mb-8">
                <FilterTabs
                    tabs={tabs}
                    activeTab={activeFilter}
                    onTabChange={setActiveFilter}
                />
            </div>

            {/* Liste des rendez-vous */}
            <div className="space-y-6">
                {filteredRendezVous.length > 0 ? (
                    filteredRendezVous.map((rendezvous, index) => (
                        <AppointmentCard
                            key={rendezvous.id}
                            rendezvous={rendezvous as any}
                            className="animate-slideUp"
                        />
                    ))
                ) : (
                    <div className="card text-center py-12 animate-fadeIn">
                        <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Aucun rendez-vous trouvé
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            {activeFilter === 'a_venir'
                                ? "Vous n'avez aucun rendez-vous à venir pour le moment."
                                : activeFilter === 'passes'
                                    ? "Aucun rendez-vous passé dans vos dossiers."
                                    : "Aucun rendez-vous dans vos dossiers."
                            }
                        </p>
                        <button className="btn-primary">
                            Prendre un rendez-vous
                        </button>
                    </div>
                )}
            </div>

            {/* Conseil */}
            {activeFilter === 'a_venir' && countByStatus.a_venir > 0 && (
                <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg animate-fadeIn">
                    <div className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                                Conseils pour vos rendez-vous
                            </h3>
                            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                                <li>• Arrivez 15 minutes avant l'heure prévue</li>
                                <li>• Apportez votre carte vitale et votre mutuelle</li>
                                <li>• Préparez la liste de vos questions à poser</li>
                                <li>• Notez vos symptômes et leur évolution</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}