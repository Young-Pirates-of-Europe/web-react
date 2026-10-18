export interface YPEBoardMember {
    name: string,
    role: string;
    country: string,
    image: string
}

export const ypeBoard: Record<string, YPEBoardMember> = {
    "Barbora Flanderková": {
        name: 'Barbora Flanderková',
        role: "Chairperson",
        country: "Czech Republic",
        image: "/board/Barbora.png"
    },
    "Miha Makše": {
        name: 'Miha Makše',
        role: "Vice-Chairperson",
        country: "Slovenia",
        image: "/board/Miha.png"
    },
    "Eliott-Spencer Hjaltalín": {
        name: 'Eliott-Spencer Hjaltalín',
        role: "Executive Board Member",
        country: "",
        image: "/board/Elliot.jpg"
    },
    "Anna Marie Lišková": {
        name: 'Anna Marie Lišková',
        role: "Executive Board Member",
        country: "Czech Republic",
        image: "/board/Anna.jpeg"
    },
    "Leo Pižent": {
        name: 'Leo Pižent',
        role: "Executive Board Member",
        country: "Slovenia",
        image: "/board/Leo.png"
    },
    "Aeolus Vrbický": {
        name: 'Aeolus Vrbický',
        role: "Board Member",
        country: "Czech Republic",
        image: "/board/Aeolus.jpeg"
    },
    "Marek Šubr": {
        name: 'Marek Šubr',
        role: "Board Member",
        country: "Czech Republic",
        image: "/board/Marek.jpeg"
    },
};
