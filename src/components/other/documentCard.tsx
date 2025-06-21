export interface DocumentEntry {
    title: string;
    description: string;
    linkLabel: string;
    href: string;
}

export function DocumentCard({ title, description, linkLabel, href }: DocumentEntry) {
    return (
        <div className="text-left max-w-xl w-full mx-auto">
            <h3 className="text-xl font-bold text-gray-700 mb-2">{title}</h3>
            <p className="text-gray-600 sub-text mb-4">{description}</p>
            <a
                href={href}
                className="text-sm text-link hover:underline hover:text-semibold transition"
            >
                {linkLabel}
            </a>
        </div>
    );
}