type NewsItem = {
    date: string;
    content: string;
};

const newsItems: NewsItem[] = [
    {
        date: '16. 2. 2025',
        content: 'EPIC registration is open! Ask your local YPE representative for more information.',
    },
    {
        date: '9. 1. 2025',
        content: 'New POLWG subgroup on agriculture and fisheries starts soon! Ask in comms chat for an invite.',
    },
    {
        date: '16. 2. 2025',
        content: 'EPIC registration is open! Ask your local YPE representative for more information.',
    },
];

export default function Hero() {
    return (
        //className="py-12 px-6"
        <section className="bg-[#d1dee3] py-6 px-6" id={"hero"}>
            <div className="max-w-responsive flex flex-col md:flex-row gap-10 items-start md:p-8 w-full ">
                <div className="w-full">
                    <h1 className="text-[clamp(2rem,5vw,7rem)] md:text-5xl font-bold tracking-tight text-black mb-4 font-dinishCondensed">
                        SAILING FOR DEMOCRACY<br/>
                        FIGHTING FOR FREEDOM
                    </h1>
                    <p className="text-gray-700 max-w-2xl text-lg sub-text md:text-lg">
                        Young Pirates of Europe is an association that brings together political youth organisations and
                        other youth organisations in Europe that focus on pirate topics,
                        such as topics surrounding usage and regulation of digital technologies, transparency in
                        governance,
                        fight against corruption in governance, topics surrounding drug substance usage and their
                        regulation,
                        engagement in democratic processes, and the protection of liberal democracies and the rule of
                        law.
                        We aim to provide an alternative to traditional European progressive parties and promote ideas
                        that we believe are lacking in the political
                        discourse.
                    </p>
                </div>

                {/* News Box */}
                <div
                    className="bg-white rounded-lg p-6 w-full lg:max-w-sm text-black shadow-md text:left md:text-right">
                    <h2 className="text-2xl font-bold mb-4">NEWS</h2>
                    <ul className="space-y-6">
                        {newsItems.map((item, index) => (
                            <li key={index}>
                                <p className="text-base font-bold">{item.date}</p>
                                <p className="sub-text text-gray-800">{item.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
