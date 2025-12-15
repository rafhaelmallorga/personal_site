'use client';

import { useState } from 'react';
import Image from 'next/image';
import NavBar from '@/app/ui/navbar';
import MobileNavbar from '@/app/ui/mobile_navbar';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-background border-strokes /* AJUSTE DO TOPO: Soma 1rem (16px) de respiro padrão + o tamanho do Notch. No Desktop: 16px + 0px = 16px. No iPhone: 16px + ~47px = ~63px (Fica perfeito). */ /* AJUSTE DE BAIXO: Geralmente headers não precisam de safe-area-bottom (só footers). Usei padding fixo para manter a simetria visual com o topo. */ flex min-h-16 w-full items-center justify-center border-b-4 pt-[calc(1rem+env(safe-area-inset-top))] pb-4">
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
                        alt="Menu Icon"
                        className="sm:hidden"
                        // Dica: Adicione isso para o pixel art não borrar
                        style={{ imageRendering: 'pixelated' }}
                    />
                </button>
            </div>
        </div>
    );
}
