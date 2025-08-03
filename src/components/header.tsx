import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "@/interfaces/general";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [hash, setHash] = useState<string>();

    const links: Link[] = [
        {href: '#member-organisations', label: 'Member organisations'},
        {href: '#board', label: 'Board'},
        {href: '#transparency', label: 'Transparency'},
        {href: '#contact', label: 'Contact'},
    ];

    useEffect(() => {

        setHash(() => window.location.hash);
        const onHashChange = () => setHash(window.location.hash);
        window.addEventListener("hashchange", onHashChange, false);
        return () => window.removeEventListener("hashchange", onHashChange, false);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-black text-white p-4 shadow">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                <div className="flex flex-row items-center gap-3">
                    <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/general/YPE.png`}
                        alt="logo"
                        className="h-8 md:h-14"
                    />
                    <a
                        href="#hero"
                        className="text-lg md:text-3xl md:text-xl font-bold leading-tight uppercase"
                    >
                        Young Pirates<br/>of Europe
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                {links.map((link) => (
                        <a key={link.href} className={`header-link font-din-condensed text-xl transition-colors md:text-lg  ${
                            hash === link.href ? "underline underline-offset-4" : ""
                        }`} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        className="text-white"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <FontAwesomeIcon
                            size={"lg"}
                            icon={faBars}
                            className={`transition-transform duration-500 ${isNavOpen ? 'rotate-90' : 'rotate-0'}`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile nav with height transition */}
            <div
                className={`
          md:hidden overflow-hidden 
          transition-[max-height] duration-300 ease-in-out
          ${isNavOpen ? 'max-h-screen' : 'max-h-0'}
        `}
            >
                <div className="bg-secondary text-white flex flex-col items-start py-4 gap-4">
                    {links.map((link: Link) => (
                        <a key={link.href} href={link.href} className={`header-link ${
                            hash === link.href ? "underline underline-offset-4" : ""
                        }`}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}