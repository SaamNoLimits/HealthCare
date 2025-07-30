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
                        <body className={`${inter.className} min-h-screen bg-gray-950 text-gray-100`}>
        <div className="bg-gradient-radial min-h-screen">
        <ThemeProvider>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </ThemeProvider>
        </div>
        </body>
        </html>
    );
}