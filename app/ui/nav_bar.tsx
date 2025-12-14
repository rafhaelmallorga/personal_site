import Link from 'next/link';

const links = [
    { name: 'Home', href: '/', icon: '' },
    { name: 'Blog', href: '/blog', icon: '' },
    { name: 'Projetos', href: '/projects', icon: '' },
    { name: 'Sobre', href: '/about', icon: '' },
    { name: 'Contato', href: '/contact', icon: '' },
];

export default function NavBar() {
    return (
        <nav className="ml-4 hidden grow sm:flex">
            <ul className="flex font-black">
                {links.map((link, index) => (
                    <li key={index} className="mr-4">
                        <Link href={link.href} className="">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
