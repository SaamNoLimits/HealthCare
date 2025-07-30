'use client';

import { useState } from 'react';
import HealthTipCard from '../../components/HealthTipCard';
import FilterTabs from '../../components/FIlterTabs';
import recommandationsData from '../../data/recommendations.json';

export default function RecommandationsPage() {
    const [activeFilter, setActiveFilter] = useState('toutes');

    const recommandations = recommandationsData.recommandations;

    // Compter les recommandations par catégorie
    const countByCategory = {
        toutes: recommandations.length,
        sommeil: recommandations.filter(r => r.categorie === 'Sommeil').length,
        nutrition: recommandations.filter(r => r.categorie === 'Nutrition').length,
        activite: recommandations.filter(r => r.categorie === 'Activité physique').length,
    };

    // Filtrer les recommandations selon le filtre actif
    const filteredRecommandations = recommandations.filter(recommandation => {
        switch (activeFilter) {
            case 'sommeil':
                return recommandation.categorie === 'Sommeil';
            case 'nutrition':
                return recommandation.categorie === 'Nutrition';
            case 'activite':
                return recommandation.categorie === 'Activité physique';
            default:
                return true;
        }
    }).sort((a, b) => {
        // Trier par priorité puis par date
        const priorityOrder: { [key: string]: number } = { 'haute': 3, 'moyenne': 2, 'faible': 1 };
        const priorityDiff = priorityOrder[b.priorite as keyof typeof priorityOrder] - priorityOrder[a.priorite as keyof typeof priorityOrder];
        if (priorityDiff !== 0) return priorityDiff;

        return new Date(b.datePublication).getTime() - new Date(a.datePublication).getTime();
    });

    const tabs = [
        { key: 'toutes', label: 'Toutes', count: countByCategory.toutes },
        { key: 'sommeil', label: 'Sommeil', count: countByCategory.sommeil },
        { key: 'nutrition', label: 'Nutrition', count: countByCategory.nutrition },
        { key: 'activite', label: 'Activité physique', count: countByCategory.activite },
    ];

    // Statistiques par priorité
    const stats = {
        haute: recommandations.filter(r => r.priorite === 'haute').length,
        moyenne: recommandations.filter(r => r.priorite === 'moyenne').length,
        faible: recommandations.filter(r => r.priorite === 'faible').length,
    } as any;

    return (
        <div className="container-custom py-8">
            {/* Header */}
            <div className="mb-8 animate-fadeIn">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Mes recommandations santé
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Conseils personnalisés pour améliorer votre bien-être
                </p>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="card animate-slideUp">
                    <div className="flex items-center">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {recommandations.length}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card animate-slideUp" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center">
                        <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                            <svg className="w-6 h-6 text-red-600 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.598 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Priorité haute</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {stats.haute}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card animate-slideUp" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center">
                        <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                            <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Priorité moyenne</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {stats.moyenne}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card animate-slideUp" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-center">
                        <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                            <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Priorité faible</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {stats.faible}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="flex items-center space-x-4">
                    <button className="btn-primary">
                        Marquer comme lu
                    </button>
                    <button className="btn-secondary">
                        Exporter en PDF
                    </button>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>
            {filteredRecommandations.length} recommandation{filteredRecommandations.length > 1 ? 's' : ''}
          </span>
                </div>
            </div>

            {/* Filtres par catégorie */}
            <div className="mb-8">
                <FilterTabs
                    tabs={tabs}
                    activeTab={activeFilter}
                    onTabChange={setActiveFilter}
                />
            </div>

            {/* Liste des recommandations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredRecommandations.length > 0 ? (
                    filteredRecommandations.map((recommandation, index) => (
                        <HealthTipCard
                            key={recommandation.id}
                            recommandation={recommandation as any}
                            className="animate-slideUp"
                        />
                    ))
                ) : (
                    <div className="col-span-full">
                        <div className="card text-center py-12 animate-fadeIn">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Aucune recommandation trouvée
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Aucune recommandation ne correspond à votre filtre actuel.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Conseil personnalisé */}
            <div className="mt-12 animate-slideUp" style={{ animationDelay: '0.4s' }}>
                <div className="bg-gradient-to-r from-medical-primary to-medical-secondary rounded-lg p-8 text-white">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">
                                💡 Conseil du jour
                            </h3>
                            <p className="text-lg mb-4">
                                Commencez par implementer une recommandation à haute priorité aujourd'hui !
                            </p>
                            <p className="text-sm opacity-90">
                                Les petits changements quotidiens mènent à de grands résultats sur le long terme.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rappel important */}
            <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg animate-fadeIn">
                <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.598 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                        <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                            Important à retenir
                        </h3>
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                            Ces recommandations sont à titre informatif. Consultez toujours votre médecin avant de modifier votre mode de vie ou vos habitudes de santé.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}