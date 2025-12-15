import '@/app/ui/global.css';
import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import Header from '@/app/ui/header';

const dm_sans = DM_Sans({
    subsets: ['latin'],
    weight: '500',
});

export const metadata: Metadata = {
    title: 'Rafhael Mallorga',
    description:
        'Site pessoal para publicação de currículo profissional, projetos desenvolvidos, histórico profissional, formação acadêmica e blog com posts sobre desenvolvimento de software, opiniões e resenhas.',
    alternates: {
        canonical: 'https://www.mallorga.com',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${dm_sans.className} bg-background flex h-screen w-full flex-col overflow-hidden antialiased`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
