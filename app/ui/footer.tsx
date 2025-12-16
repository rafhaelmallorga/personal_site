import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

const links = [
    { name: 'Home', href: '/', icon: 'home.png', size: 20 },
    { name: 'Blog', href: '/blog', icon: 'blog.png', size: 20 },
    { name: 'Projetos', href: '/projects', icon: 'projects.png', size: 18 },
    { name: 'Sobre', href: '/about', icon: 'about.png', size: 18 },
    { name: 'Contato', href: '/contact', icon: 'contact.png', size: 20 },
];

export default function Footer() {
    return (
        <div className="bg-cards border-strokes text-text mt-4 flex w-full items-center justify-center border-t-4 p-4">
            <div className="flex w-full max-w-6xl flex-col items-center justify-between font-black sm:flex-row sm:items-end">
                <nav className="flex w-full max-w-40 items-center justify-baseline">
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className="flex items-center"
                                >
                                    <div className="flex h-6 w-6 items-center justify-between">
                                        <Image
                                            src={`/nav_icons/${link.icon}`}
                                            alt={`Menu icon for ${link.icon}`}
                                            width={link.size}
                                            height={link.size}
                                            style={{
                                                imageRendering: 'pixelated',
                                            }}
                                        />
                                    </div>
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex w-full max-w-80 flex-col items-center justify-center p-4">
                    <span className="mb-4 text-xl font-black">Contato</span>
                    <div className="flex w-full items-center justify-around font-black">
                        <Link
                            href="https://github.com/rafhaelmallorga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-strokes oldschool-shadow mr-1 flex max-w-30 grow items-center justify-around border-4 p-1"
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
                            className="border-strokes oldschool-shadow flex max-w-30 grow items-center justify-around border-4 p-1"
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
                <div className="flex max-w-80 justify-center p-2 font-extrabold">
                    <span>&copy; Mallorga 1994 - 2026</span>
                </div>
            </div>
        </div>
    );
}
