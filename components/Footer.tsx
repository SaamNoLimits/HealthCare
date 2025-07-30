const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                            Contact
                        </h3>
                        <div className="mt-4 space-y-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                📞 01 23 45 67 89
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                ✉️ contact@medicare.fr
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                📍 12 Rue de la Santé, 75000 Paris
                            </p>
                        </div>
                    </div>

                    {/* Horaires */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                            Horaires d'ouverture
                        </h3>
                        <div className="mt-4 space-y-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Lun - Ven: 8h00 - 18h00
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Samedi: 9h00 - 17h00
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Dimanche: Fermé
                            </p>
                        </div>
                    </div>

                    {/* Urgences */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                            Urgences
                        </h3>
                        <div className="mt-4 space-y-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                🚨 SAMU: 15
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                🚒 Pompiers: 18
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                🏥 Urgences Européennes: 112
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © 2025 MediCare. Tous droits réservés.
                        </p>
                        <div className="mt-4 md:mt-0 flex space-x-6">
                            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-medical-primary">
                                Politique de confidentialité
                            </a>
                            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-medical-primary">
                                Mentions légales
                            </a>
                            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-medical-primary">
                                CGU
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;