interface Recommandation {
    id: number;
    titre: string;
    description: string;
    categorie: string;
    priorite: 'haute' | 'moyenne' | 'faible';
    datePublication: string;
    conseils: string[];
}

interface HealthTipCardProps {
    recommandation: Recommandation;
    className?: string;
    compact?: boolean;
}

const HealthTipCard = ({ recommandation, className = '', compact = false }: HealthTipCardProps) => {
    const getPriorityColor = (priorite: string) => {
        switch (priorite) {
            case 'haute':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            case 'moyenne':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'faible':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
        }
    };

    const getCategoryIcon = (categorie: string) => {
        switch (categorie) {
            case 'Nutrition':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                );
            case 'Activité physique':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                );
            case 'Sommeil':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
        }
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('fr-FR');
    };

    return (
        <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-200 animate-fadeIn ${className}`}>
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-start space-x-3">
                    <div className="p-2 bg-medical-primary bg-opacity-10 rounded-lg text-medical-primary">
                        {getCategoryIcon(recommandation.categorie)}
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {recommandation.titre}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {recommandation.categorie}
                        </p>
                    </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(recommandation.priorite)}`}>
          {recommandation.priorite}
        </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
                {recommandation.description}
            </p>

            {/* Conseils - Seulement si pas en mode compact */}
            {!compact && (
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Conseils pratiques :
                    </h4>
                    <ul className="space-y-1">
                        {recommandation.conseils.map((conseil, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                <svg className="w-4 h-4 text-medical-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {conseil}
                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                <span>Publié le {formatDate(recommandation.datePublication)}</span>
                {compact && (
                    <button className="text-medical-primary hover:text-blue-700 font-medium">
                        Voir plus
                    </button>
                )}
            </div>
        </div>
    );
};

export default HealthTipCard;