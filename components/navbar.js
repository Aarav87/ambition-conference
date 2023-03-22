import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";

const menuItems = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Team",
        path: "/team"
    },
    {
        name: "Sponsors",
        path: "/sponsors"
    },
    {
        name: "Past Events",
        path: "/past-events"
    }
]

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

export default function Navbar() {
    const router = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="bg-white sticky lg:text-xl">
            <div className="w-full mx-auto lg:flex py-2 px-4 lg:items-center shadow-xl z-[100]">
                <div className="flex justify-between items-center">
                    <Link href="/" className="p-4">
                        <Image src="/logos/black.png" alt="logo" width={120} height={120} />
                    </Link>

                    <button
                        className="px-3 py-1 opacity-50 hover:opacity-75 rounded text-gray-600 lg:hidden"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <GoThreeBars />
                    </button>
                </div>

                <div className={`${showDropdown ? "flex" : "hidden"} lg:ml-auto lg:flex mt-3 lg:mt-0 flex-col lg:flex-row `}>
                    {menuItems.map((menuItem, i) => (
                        <Link
                            className={`${menuItem.path === router.route ? "text-blue-500" : "text-black hover:text-blue-500"} p-2 lg:px-4 lg:mx-2 duration-100`}
                            href={menuItem.path}
                            key={i}
                        >
                            {menuItem.name}
                        </Link>
                    ))}
                </div>
                <div className={`${showDropdown ? "flex pb-5" : "hidden"} lg:ml-auto mt-3 lg:mt-0 lg:flex self-center gap-4 flex-row items-center justify-center justify-self-center`}>
                    {socials.map((social, i) => (
                        <a href={social.url} key={i}>
                            <Image src={social.img} alt={social.name} width={40} height={40} />
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
}