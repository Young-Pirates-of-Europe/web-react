import {DocumentCard, DocumentEntry} from "@/components/other/documentCard";

const documents: DocumentEntry[] = [
    {
        title: 'ACTION PLAN',
        description:
            'This document serves to set goals and milestones for Young Pirates of Europe for their future board term. Each action plan is structured for a year, copying the duration of the mandate of the board.',
        linkLabel: 'VIEW CURRENT ACTION PLAN',
        href: 'https://cloud.partipirate.org/index.php/s/qHSQpCaedaB7tSF',
    },
    {
        title: 'ANNUAL REVIEW',
        description:
            'This review summarises all activities of the board during their term and evaluates their completion or difficulties in the process. This document primarily reflects the goals set in the action plan.',
        linkLabel: 'VIEW CURRENT ANNUAL REVIEW',
        href: 'https://cloud.partipirate.org/index.php/s/k97rAyiS9gi4bWw',
    },
    {
        title: 'FINANCIALS',
        description:
            'All documents surrounding the financing of this association are grouped here. This primarily consists of proposed budgets and closing budgets.',
        linkLabel: 'VIEW CURRENT FINANCIALS',
        href: 'https://cloud.partipirate.org/index.php/s/seDzJWi86B2YZQF',
    },
    {
        title: 'STATUTES',
        description:
            'Main rules of the association which consists of setting primary bodies of the association and its powers.',
        linkLabel: 'VIEW CURRENT STATUTES',
        href: 'https://cloud.partipirate.org/s/q4gcwmQyagbeGWb?dir=/&openfile=true',
    },
    {
        title: 'IROP',
        description:
            'Internal Rules of Procedures expand the scope of the statutes and further specify the functioning of the association.',
        linkLabel: 'VIEW CURRENT IROP',
        href: '#transparency',
    },
    {
        title: 'ARCHIVE',
        description:
            'All other documents or materials of the association can be found here.',
        linkLabel: 'VIEW ARCHIVE',
        href: '#transparency',
    },
];

export default function Transparency() {
    return (
        <section className="px-6 py-6" id={'transparency'}>
            <div
                className={'md:p-8 h-auto justify-center items-center flex flex-col max-w-responsive gap-4'}>
                <h2 className="section-title text-left w-full md:text-center">TRANSPARENCY</h2>
                <div className="grid gap-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
                    {documents.map((doc) => (
                        <DocumentCard key={doc.title} {...doc} />
                    ))}
                </div>
            </div>
        </section>
    )
}