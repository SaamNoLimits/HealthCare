import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'MediCare - Portail Patient',
    description: 'Votre carnet de suivi médical digitalisé',
    keywords: 'santé, médical, rendez-vous, dossier médical, recommandations',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <body className={`${inter.className} min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200`}>
        <ThemeProvider>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}