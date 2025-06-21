import {YPEOrg} from "@/interfaces/organisations";
import {YPEAssociation} from "@/enums/members";

export const YPEOrganisations: Record<YPEAssociation, YPEOrg> = {
    [YPEAssociation.MLADI_PIRATI]: {
        country: 'Slovenia',
        name: 'Mladi Pirati Slovenije',
        facebook: 'https://www.facebook.com/MladiPiratiSlovenije',
        instagram: 'https://instagram.com/mladipirati?igshid=NzZlODBkYWE4Ng==',
        image: '/members/slovenia.jpg',
        logoAspectRation: 'square',
        email: 'info@mladipirati.si',
        active: true
    },

    [YPEAssociation.UNG_PIRAT]: {
        country: 'Sweden',
        name: 'Ung Pirat',
        website: 'https://ungpirat.se/',
        facebook: 'https://www.facebook.com/ungpirat',
        instagram: 'https://www.instagram.com/ungpirat',
        twitter: 'https://twitter.com/ung_pirat',
        mastodon: 'https://mastodon.social/@ungpirat',
        tiktok: 'https://www.tiktok.com/@ungpirat',
        youtube: 'https://www.youtube.com/@ungpirat',
        image: '/members/sweden.png',
        logoAspectRation: 'auto',
        email: 'daniel.kvarnstrom@ungpirat.se',
        active: true
    },

    [YPEAssociation.JUNGE_PIRATEN]: {
        country: 'Germany',
        name: 'Junge Piraten',
        website: 'https://jungepiraten.de/',
        instagram: 'https://www.instagram.com/jungepiratende/',
        twitter: 'https://twitter.com/JungePiraten_DE',
        image: '/members/germany.png',
        logoAspectRation: '3/2',
        email: 'koordination@jungepiraten.de',
        active: false
    },

    [YPEAssociation.MLADE_PIRATSTVO]: {
        country: 'Czech Republic',
        name: 'Mladé Pirátstvo',
        website: 'https://mladi.pirati.cz/',
        facebook: 'https://www.facebook.com/search/top?q=mlad%C3%A9%20pir%C3%A1tstvo',
        instagram: 'https://www.instagram.com/mlade.piratstvo/',
        twitter: 'https://twitter.com/MPiratstvo',
        image: '/members/czech.png',
        logoAspectRation: '3/2',
        email: 'mladi@pirati.com',
        active: true
    },

    [YPEAssociation.JONK_PIRATEN]: {
        country: 'Luxembourg',
        name: 'Jonk Piraten',
        website: 'https://piraten.lu/jonk-piraten-jopis/',
        image: '/members/luxemburg.png',
        logoAspectRation: '2/1',
        email: 'info@jonkpiraten.lu',
        active: true
    },

    [YPEAssociation.UNGIR_PIRATAR]: {
        country: 'Iceland',
        name: 'Ungir Píratar',
        facebook: 'https://www.facebook.com/ungirpiratar',
        instagram: 'https://www.instagram.com/ungirpiratar/?hl=en',
        image: '/members/iceland.png',
        logoAspectRation: '3/2',
        email: 'up@piratar.is',
        active: false
    },

    [YPEAssociation.JEUNES_PIRATES]: {
        country: 'France',
        name: 'Jeunes Pirates',
        website: 'https://wiki.partipirate.org/Jeunes_Pirates',
        image: '/members/france.png',
        logoAspectRation: '3/2',
        email: 'jeunespirates@partipirate.org',
        active: true
    },

    [YPEAssociation.PIRAATTINUORET]: {
        country: 'Finland',
        name: 'Piraattinuoret',
        website: 'https://pinu.fi/',
        facebook: 'https://www.facebook.com/piraattinuoret',
        instagram: 'https://www.instagram.com/piraattinuoret/',
        twitter: 'https://twitter.com/piraattinuoret',
        image: '/members/finland.png',
        logoAspectRation: '3/2',
        email: 'maija.li.raudaskoski@piraattipuolue.fi',
        active: true
    }
};
