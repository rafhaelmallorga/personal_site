import Link from 'next/link';
import { Frown } from 'lucide-react';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-[#777777]">
            <Frown className="size-56" />
            <h2 className="text-8xl">404</h2>
            <h3 className="text-3xl text-[#BBBFBD]">Page not found</h3>
            <p className="mt-4 mb-4">Esta página não existe.</p>
            <Link href="/" className="button-style h-9 w-20">
                Voltar
            </Link>
        </div>
    );
}
