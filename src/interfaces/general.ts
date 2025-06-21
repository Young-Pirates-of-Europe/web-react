import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export interface Link{
    href: string,
    label: string
}

export interface SocialLink {
    url: string;
    icon: IconDefinition;
    label: string;
}