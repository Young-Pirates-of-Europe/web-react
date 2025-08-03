import {YPEOrg} from "@/interfaces/organisations";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {SocialLink} from "@/interfaces/general";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";

interface MemberCardProps {
    org: YPEOrg;
}

const MemberCard = ({org}: MemberCardProps) => {
    const socials: SocialLink[] = [
        {url: org.website, icon: faGlobe, label: "Website"},
        {url: org.facebook, icon: faFacebook, label: "Facebook"},
        {url: org.instagram, icon: faInstagram, label: "Instagram"},
        {url: org.twitter, icon: faXTwitter, label: "Twitter"},
        {url: org.youtube, icon: faYoutube, label: "YouTube"},
        org.email ? {url: `mailto:${org.email}`, icon: faEnvelope, label: "E-mail"} : null
    ].filter((s): s is SocialLink => Boolean(s?.url));

    return (
        <article className="card-style">
            <div className="flex flex-1 items-center justify-center">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}${org.image}`}
                    alt={org.name}
                    width={200}
                    height={200}
                    className="h-32 w-auto object-contain"
                />
            </div>

            <div className="mt-4">
                <h3 className="text-[clamp(1rem,10vw,1.125rem)] md:text-base lg:text-lg font-semibold">{org.name}</h3>
                <p className="mb-3 text-sm text-accent-gray">{org.country}</p>
            </div>

            <div className="flex gap-4 flex-wrap">
                {socials.map(({url, icon, label}) => (
                    <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="text-primary transition hover:opacity-80"
                    >
                        <FontAwesomeIcon size={"lg"} icon={icon}/>
                    </a>
                ))}
            </div>
        </article>
    );
};

export default MemberCard;
