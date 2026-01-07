export interface YPEBoardMember {
    name: string,
    role: string;
    country: string,
    image: string
}

export const ypeBoard: Record<string, YPEBoardMember> = {
    "Vid Bukovec": {
        name: 'Vid Bukovec',
        role: "President",
        country: "Slovenia",
        image: "/board/Vid.png"
    },
    "Maija Raudaskoski": {
        name: 'Maija Raudaskoski',
        role: "Secretary General",
        country: "Finland",
        image: "/board/Maija.png"
    },
    "Eliott-Spencer Hjaltalín": {
        name: 'Eliott-Spencer Hjaltalín',
        role: "Treasurer",
        country: "Iceland",
        image: "/board/Elliot.jpg"
    },
    "Max Werner": {
        name: 'Max Werner',
        role: "Board Member",
        country: "Sweden",
        image: "/board/Maija.png"
    },
    "Matej Ahačič": {
        name: 'Matej Ahačič',
        role: "Board Member",
        country: "Slovenia",
        image: "/board/Hans.png"
    },
};
