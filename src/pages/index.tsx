import Board from "@/components/sections/board";
import {MemberOrganisations} from "@/components/sections/member-organisations";
import Contact from "@/components/sections/contact";
import Transparency from "@/components/sections/transparency";
import Hero from "@/components/sections/hero";

export default function Home() {
    return (
        <>
            <Hero/>
            <MemberOrganisations/>
            <Board/>
            <Transparency/>
            <Contact/>
        </>
    );
}
