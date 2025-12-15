import Image from 'next/image';
import Link from 'next/link';

export default function FastLinks() {
    return (
        <div className="border-strokes relative flex hidden w-full items-center justify-center border-b-4 bg-white text-xl font-bold sm:flex">
            <div className="max-w border-strokes x-10 bg-cards absolute flex h-16 w-full max-w-6xl items-center justify-around border-4">
                <Link
                    className="border-strokes hover:bg-[] relative flex h-full w-full items-center justify-between border-r-4 pr-4 pl-4"
                    href="https://github.com/rafhaelmallorga"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="absolute bottom-16 left-0">
                        Links Úteis
                    </span>
                    <span>GitHub</span>
                    <Image
                        src="/up_right_arrow.png"
                        alt="Seta apontando para diagonal a cima e a direita."
                        width={25}
                        height={25}
                    />
                </Link>
                <Link
                    className="border-strokes flex h-full w-full items-center justify-between border-r-4 pr-4 pl-4"
                    href="https://www.linkedin.com/in/rafhaelmallorga/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>LinkedIn</span>
                    <Image
                        src="/up_right_arrow.png"
                        alt="Seta apontando para diagonal a cima e a direita."
                        width={25}
                        height={25}
                    />
                </Link>
                <Link
                    className="border-strokes flex h-full w-full items-center justify-between border-r-4 pr-4 pl-4"
                    href="/about"
                >
                    <span>Sobre</span>
                    <Image
                        src="/up_right_arrow.png"
                        alt="Seta apontando para diagonal a cima e a direita."
                        width={25}
                        height={25}
                    />
                </Link>
                <Link
                    className="border-strokes flex h-full w-full items-center justify-between pr-4 pl-4"
                    href="https://wa.me/5511942450488"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>WhatsApp</span>
                    <Image
                        src="/up_right_arrow.png"
                        alt="Seta apontando para diagonal a cima e a direita."
                        width={25}
                        height={25}
                    />
                </Link>
            </div>
        </div>
    );
}
