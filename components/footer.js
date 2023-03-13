import Image from "next/image";
import React from "react";

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
        url: "",
        img: "/socials/email.png"
    }
]

export default function Footer() {
    return (
        <div className="flex bg-blue-900 flex-col items-center gap-4 p-8 py-16 fixed inset-x-0 bottom-0">
            <Image src="/logos/white.png" alt="Logo" width={150} height={50} objectFit="contain" objectPosition="center" />
            <div className="pt-2 flex gap-6 pb-3">
                {socials.map((social, i) => (
                    <a href={social.url} key={i}>
                        <Image src={social.img} alt={social.name} width={40} height={40} />
                    </a>
                ))}
            </div>
            <p className="text-md text-white text-xl">
                Made by
                {" "}
                <a
                    className="text-blue-200 hover:text-amber-300 transition-all duration-150 underline"
                    href="https://github.com/Aarav87"
                >
                    Aarav Chhabra
                </a>
            </p>
        </div>
    )
}