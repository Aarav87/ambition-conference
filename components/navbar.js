import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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

const Navbar = () => {
    const router = useRouter();

    return (
        <header className="bg-white py-2 sticky text-xl">
            <div className="w-full h-20 px-4 mx-auto lg:flex lg:items-center shadow-xl z-[100]">
                <div className="flex justify-between items-center">
                    <Link href="/" className="p-4">
                        <Image src="/logos/black.png" alt="logo" width={100} height={120} />
                    </Link>
                </div>
                <div className="lg:flex flex-col lg:flex-row lg:ml-auto mt-3 lg:mt-0">
                    {menuItems.map((menuItem, i) => (
                        <Link
                            className={`${menuItem.path === router.route ? "text-blue-500" : "text-black hover:text-blue-500"} p-2 lg:px-4 lg:mx-2 rounded duration-150 transition-colors`}
                            href={menuItem.path}
                            key={i}
                        >
                            {menuItem.name}
                        </Link>
                    ))}
                </div>
                <div className="lg:flex flex-row lg:ml-auto mt-3 lg:mt-0 items-center justify-center self-center justify-self-center gap-4">
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

export default Navbar