import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
}

// bg-[url('../../public/BoulderBGmin.jpg')]

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="scroll min-h-screen bg-contain h-screen">
                    <div
                        className="fixed inset-0 bg-gradient-to-b from-white to-[#73d9c9] z-[-1]"
                        aria-hidden="true"></div>
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    )
}
