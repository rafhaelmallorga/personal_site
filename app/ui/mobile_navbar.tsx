'use client';

import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { JSX } from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const links = [
    { name: 'Home', href: '/', icon: 'home.png', size: 20 },
    { name: 'Blog', href: '/blog', icon: 'blog.png', size: 20 },
    { name: 'Projetos', href: '/projects', icon: 'projects.png', size: 18 },
    { name: 'Sobre', href: '/about', icon: 'about.png', size: 18 },
    { name: 'Contato', href: '/contact', icon: 'contact.png', size: 20 },
];

export default function MobileNavbar({ isOpen, onClose }: Props): JSX.Element {
    const pathname = usePathname();
    return (
        <>
            <div
                className={clsx(
                    'bg-cards border-strokes fixed top-0 right-0 z-50 h-full w-3/4 max-w-60 border-l-4 transition-transform duration-300 ease-in-out',
                    {
                        'translate-x-0': isOpen,
                        'translate-x-full': !isOpen,
                    }
                )}
            >
                <div className="border-strokes flex justify-center border-b-4">
                    <span className="text-button pt-2 pb-2 text-4xl font-extrabold">
                        MENU
                    </span>
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 rounded p-1 hover:bg-black/10"
                    >
                        <X size={28} />
                    </button>
                </div>
                <nav>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className={clsx(
                                        'border-strokes mr-2 flex h-10 w-full items-center border-b-4 p-2 font-bold',
                                        {
                                            'text-button':
                                                pathname === link.href,
                                        }
                                    )}
                                >
                                    <div className="flex h-6 w-6 items-center justify-between">
                                        <Image
                                            src={`/nav_icons/${link.icon}`}
                                            alt={`Menu icon for ${link.icon}`}
                                            width={link.size}
                                            height={link.size}
                                        />
                                    </div>
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex flex-col border-b-4 p-2">
                    <span className="text-xl font-black">Redes</span>
                    <div className="mt-2 flex w-full items-center font-bold">
                        <Link
                            href="https://github.com/rafhaelmallorga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-strokes mr-1 flex max-w-30 grow items-center justify-around border-4 p-1"
                        >
                            <Image
                                src="/github.png"
                                alt="GitHub logo"
                                width={18}
                                height={18}
                            />
                            <span>GitHub</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/rafhaelmallorga/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-strokes flex max-w-30 grow items-center justify-around border-4 p-1"
                        >
                            <Image
                                src="/linkedin.png"
                                alt="LinkedIn logo"
                                width={18}
                                height={18}
                            />
                            <span>LinkedIn</span>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center border-b-4 p-2 font-extrabold">
                    <span>&copy; Mallorga 1994 - 2026</span>
                </div>
            </div>
        </>
    );
}
