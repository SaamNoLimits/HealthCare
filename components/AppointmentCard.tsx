interface RendezVous {
    id: number;
    medecin: string;
    specialite: string;
    date: string;
    heure: string;
    lieu: string;
    adresse: string;
    statut: 'a_venir' | 'passe';
    type: string;
}

interface AppointmentCardProps {
    rendezvous: RendezVous;
    className?: string;
}

const AppointmentCard = ({ rendezvous, className = '' }: AppointmentCardProps) => {
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const isUpcoming = rendezvous.statut === 'a_venir';

    return (
        <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-200 animate-slideUp ${className}`}>
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {rendezvous.medecin}
                    </h3>
                    <p className="text-sm text-medical-primary font-medium">
                        {rendezvous.specialite}
                    </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isUpcoming
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}>
          {isUpcoming ? 'À venir' : 'Passé'}
        </span>
            </div>

            {/* Type de consultation */}
            <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Type:</span> {rendezvous.type}
                </p>
            </div>

            {/* Date et heure */}
            <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
            {formatDate(rendezvous.date)}
          </span>
                </div>
                <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
            {rendezvous.heure}
          </span>
                </div>
            </div>

            {/* Lieu */}
            <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {rendezvous.lieu}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        {rendezvous.adresse}
                    </p>
                </div>
            </div>

            {/* Actions pour les rendez-vous à venir */}
            {isUpcoming && (
                <div className="mt-6 flex space-x-3">
                    <button className="flex-1 bg-medical-primary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                        Modifier
                    </button>
                    <button className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
                        Annuler
                    </button>
                </div>
            )}
        </div>
    );
};

export default AppointmentCard;