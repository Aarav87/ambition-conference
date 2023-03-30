import { Inter } from 'next/font/google'
import Layout from "@/components/layout";
import Image from "next/image";
import HomeHero from "@/public/heroBanner/home.jpg";
import Logo from "@/public/logos/white.png";
import Link from "next/link";
import {Client} from "@notionhq/client";

const inter = Inter({ subsets: ['latin'] })

export const notion = new Client ({ auth: process.env.NOTION_API_KEY });

export default function Home() {
  return (
      <Layout pageTitle="Home">
          <header className="h-screen relative">
              <Image
                src={HomeHero}
                placeholder="blur"
                layout="fill"
                className="object-center object-cover"
                alt="Hero Image"
                quality={100}
                priority={true}
              />

              <div className="relative z-1 h-screen flex items-center justify-center">
                  <div className="text-center mx-auto text-white">
                      <Image src={Logo} width={400} height={100} className="mx-auto" quality={100} alt="Logo" />

                      <h1 className="font-bold mt-4 text-3xl xs:text-5xl md:text-7xl">
                          Ambition Conferences
                      </h1>

                      <h2 className=" text-lg xs:text-xl md:text-2xl mt-2">
                            We provide students with opportunities to learn about business from industry leaders.
                      </h2>

                      <Link href="/event-details">
                          <button className='bg-dark-periwinkle hover:bg-blue-900 px-4 py-3 font-medium text-2xl rounded-md mt-10'>
                              Event Details
                          </button>
                      </Link>

                  </div>
              </div>
          </header>
      </Layout>
  )
}
