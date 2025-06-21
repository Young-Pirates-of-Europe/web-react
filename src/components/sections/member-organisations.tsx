import {YPEOrganisations} from "@/data/organisationsData";
import {YPEAssociation} from "@/enums/members";
import MemberCard from "@/components/other/memberOrganisationCards";

export function MemberOrganisations() {
    return (
        <section
            id="member-organisations"
            className="py-6 px-6"
        >
            <div className="max-w-responsive flex flex-col gap-4 md:p-8 tems-center justify-center">
                <h2 className="section-title text-left md:text-center">MEMBER ORGANISATIONS</h2>

                <p className="text-gray-700 sub-text text-left flex-1 text-lg">
                    Meet our members – a diverse network of youth organizations across Europe
                    working together to defend digital rights, democracy, and freedom.
                </p>

                <div className="grid grid-cols-1 [@media(min-width:520px)_and_(max-width:767px)]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 items-start">
                    {Object.values(YPEAssociation)
                        .filter((assoc) => YPEOrganisations[assoc]?.active)
                        .map((assoc) => (
                        <MemberCard key={assoc} org={YPEOrganisations[assoc]}/>
                    ))}
                </div>
            </div>
        </section>

    );
}