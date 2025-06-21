import {YpeSocials} from "@/interfaces/ype-socials";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter} from "@fortawesome/free-brands-svg-icons";

const socials: YpeSocials[] = [
    {url: "https://www.facebook.com/youngpiratesEU", icon: faFacebook, label: "Facebook"},
    {url: "https://www.instagram.com/youngpirateseu", icon: faInstagram, label: "Instagram"},
    {url: "https://x.com/YoungPiratesEU", icon: faXTwitter, label: "Twitter"},
];

export default function Contact() {
    return (
        <section id="contact" className="bg-[#ffcc00] text-black py-6 px-6">
            <div className={"max-w-responsive md:p-8"}>
                <div className={"flex flex-col gap-4"}>
                    <div className="w-full text-center">
                        <h2 className="section-title text-3xl font-bold relative inline-block text-left md:text-center w-full">
                            CONTACT
                        </h2>
                    </div>

                    <div className="mx-auto flex flex-col gap-4 w-full">
                        {/* Info */}
                        <div className="space-y-6">
                            {[
                                {
                                    title: "NAME",
                                    content: "Young Pirates of Europe a.s.b.l. also known as YPE",
                                },
                                {
                                    title: "ADDRESS",
                                    content: "1a, Route de Luxembourg\nL - 8184 Kopstal\nLuxembourg",
                                },
                                {
                                    title: "ID",
                                    content: "F10614 registered in R.C.S Luxembourg",
                                },
                            ].map(({title, content}) => (
                                <div key={title} className="space-y-1">
                                    <h3 className="font-semibold text-sm uppercase tracking-wide">
                                        {title}
                                    </h3>
                                    <p className="whitespace-pre-line leading-relaxed sub-text">
                                        {content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-6">
                        {socials.map(({url, icon, label}) => (
                            <a
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="
                                    flex items-center justify-center
                                    h-auto
                                  "
                            >
                                <FontAwesomeIcon icon={icon} size={"2xl"}/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
