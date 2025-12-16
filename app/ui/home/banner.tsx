import Button from '@/app/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
    return (
        <div className="flex h-150 w-full items-center justify-center bg-white">
            <div className="flex h-full w-full max-w-6xl flex-col items-center justify-around sm:mr-4 sm:ml-4 sm:flex-row sm:justify-between">
                <div className="w-4/5 max-w-96 sm:ml-4 sm:w-full sm:max-w-110 lg:max-w-150">
                    <p className="text-text text-3xl font-black md:text-6xl lg:text-7xl">
                        Olá.
                    </p>
                    <h1 className="text-text text-3xl font-black md:text-6xl lg:text-7xl">
                        Sou o Mallorga.
                    </h1>
                    <p className="text-text mb-6 text-xl font-bold">
                        Desenvolvedor Full-Stack.
                    </p>
                    <Link
                        href="https://wa.me/5511942450488"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-button text-text border-strokes oldschool-shadow w-40 border-4 p-1 text-xl font-bold hover:brightness-120 sm:mt-6"
                    >
                        Fale Comigo!
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src="/professional_picture.png"
                        width={1024}
                        height={1024}
                        alt="Professional Picture of Rafhael Mallorga."
                        className="border-strokes oldschool-shadow w-full max-w-96 border-4 sm:max-w-120"
                    />
                </div>
            </div>
        </div>
    );
}
