import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from './ReactQueryProvider';
import LinkButton from '../components/base/link-button';
import { useEffect } from 'react';
import { useCookies } from 'next-client-cookies';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Offshorly - BlogPost',
    description: 'A simple CRUD app created with ReactJS and NodeJS',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReactQueryProvider>
            <html lang="en">
                <body
                    className={`flex flex-col items-center text-black bg-slate-200 h-screen w-full ${inter.className}`}
                >
                    <div className="fixed justify-start top-0 left-0 flex flex-col space-y-2 p-2">
                        <LinkButton href="/" label="home" />
                        <LinkButton href="/users" label="users" />
                        <LinkButton href="/users/new" label="register" />
                        <LinkButton href="/auth" label="auth" />
                    </div>

                    <main className="flex flex-col items-center w-full max-w-[640px] py-16 space-y-8 mb-10">
                        {children}
                    </main>
                </body>
            </html>
        </ReactQueryProvider>
    );
}
