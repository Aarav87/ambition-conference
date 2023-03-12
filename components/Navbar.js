import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png"
import igIcon from "@/public/ig.png"

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

const Navbar = () => {
    return (
        <header className="bg-white py-2 sticky text-xl">
            <div className="w-full h-20 px-4 mx-auto lg:flex lg:items-center shadow-xl z-[100]">
                <div className="flex justify-between items-center">
                    <Link href="/" className="p-4">
                        <Image src={Logo} alt="logo" width={100} height={120} />
                    </Link>
                </div>
                <div className="lg:flex flex-col lg:flex-row lg:ml-auto mt-3 lg:mt-0">
                    {menuItems.map((menuItem, i) => (
                        <Link
                            className="p-2 lg:px-6 lg:mx-2 rounded duration-150 transition-colors hover:text-amber-300"
                            href={menuItem.path}
                            key={i}
                        >
                            {menuItem.name}
                        </Link>
                    ))}
                </div>
                <div className="lg:flex flex-row lg:ml-auto mt-3 lg:mt-0">
                    <a href="https://www.instagram.com/ambitionconferences/">
                        <Image src={igIcon} alt="Instagram" width={40} height={40} />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navbar