import Link from 'next/link';
import Image from 'next/image';

const links = [
    { name: 'Home', href: '/', icon: 'home.png', size: 20 },
    { name: 'Blog', href: '/blog', icon: 'blog.png', size: 20 },
    { name: 'Projetos', href: '/projects', icon: 'projects.png', size: 18 },
    { name: 'Sobre', href: '/about', icon: 'about.png', size: 18 },
    { name: 'Contato', href: '/contact', icon: 'contact.png', size: 20 },
];

export default function NavBar() {
    return (
        <nav className="ml-4 hidden grow sm:flex">
            <ul className="flex font-black">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            className="mr-2 flex h-10 w-fit items-center justify-center p-2 hover:bg-[#E6E6E6]"
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
    );
}
