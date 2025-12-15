import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-[#777777]">
            <Image
                src="/working_in_progress.gif"
                alt="gif"
                width={300}
                height={300}
            />
            <h3 className="text-3xl text-[#BBBFBD]">Em breve...</h3>
            <p className="mt-4 mb-4">Página em construção.</p>
            <Link href="/" className="button-style h-9 w-20">
                Voltar
            </Link>
        </div>
    );
}
