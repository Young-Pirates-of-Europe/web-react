type FooterLink = {
    label: string;
    href: string;
};

const footerLinks: FooterLink[] = [
    {label: 'Member Organisations', href: '#member-organisations'},
    {label: 'Board', href: '#board'},
    {label: 'Transparency', href: '#transparency'},
    {label: 'Contact', href: '#contact'},
];

export default function Footer() {
    return (
        <footer className="bg-black text-white py-6">
            <nav className="flex flex-wrap justify-center gap-8 text-center">
                {footerLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="uppercase text-lg font-bold font-din-condensed tracking-wide hover:underline"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </footer>
    );
}
