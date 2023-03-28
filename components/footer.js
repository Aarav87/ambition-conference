import Image from "next/image";
import React from "react";
import Logo from "@/public/logos/white.png";

export const socials = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/ambitionconferences/",
        img: "/socials/ig.png"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/ambition-conferences/",
        img: "/socials/linkedin.png"
    },
    {
        name: "Email",
        url: "mailto:ambitionconferences@gmail.com",
        img: "/socials/email.png"
    }
]

export default function Footer() {
    return (
        <div className="flex bg-dark-periwinkle flex-col gap-4 p-8 py-16 items-center">
            <Image src={Logo} alt="Logo" width={150} height={50} />
            <div className="pt-2 gap-6 flex pb-3">
                {socials.map((social, i) => (
                    <a href={social.url} key={i}>
                        <Image src={social.img} alt={social.name} width={40} height={40} />
                    </a>
                ))}
            </div>
            <p className="lg:text-xl text-md text-white">
                Made by
                {" "}
                <a
                    className="underline text-blue-200 transition-all hover:text-amber-300 duration-100"
                    href="https://github.com/Aarav87"
                >
                    Aarav Chhabra
                </a>
            </p>
        </div>
    )
}