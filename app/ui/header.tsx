'use client';

import { useState } from 'react';
import Image from 'next/image';
import NavBar from '@/app/ui/navbar';
import MobileNavbar from '@/app/ui/mobile_navbar';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-background border-strokes flex min-h-16 w-full items-center justify-center border-b-4">
            <div className="flex w-full max-w-6xl items-center justify-between pr-3 pl-3">
                <Image
                    src="/old_computer_logo.png"
                    width={40}
                    height={40}
                    alt="Old nostalgic computer logo"
                />
                <NavBar />
                <MobileNavbar
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                />
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Image
                        src="/hamburguer_menu.png"
                        width={40}
                        height={40}
                        alt="Old nostalgic computer logo"
                        className="sm:hidden"
                    />
                </button>
            </div>
        </div>
    );
}
