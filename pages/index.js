import { Inter } from 'next/font/google'
import Layout from "@/components/layout";
import Link from "next/link";
import { Client } from "@notionhq/client";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export const notion = new Client ({ auth: process.env.NOTION_API_KEY });

export default function Home() {
  return (
      <Layout pageTitle="Home">
          <header className="h-screen relative">
              <Image
                src="/heroBanner/home.jpg"
                layout="fill"
                className="object-center object-cover"
                alt="Hero Image"
                quality={100}
                priority={true}
              />

              <div className="relative z-1 h-screen flex items-center justify-center">
                  <div className="text-center mx-auto text-white">
                      <Image src="/logos/white.png" width={400} height={100} className="mx-auto" quality={100} alt="Logo" />

                      <h1 className="font-bold mt-4 text-3xl xs:text-5xl md:text-7xl">
                          Ambition Conferences
                      </h1>

                      <h2 className=" text-lg xs:text-xl md:text-2xl mt-2">
                            We provide students with opportunities to learn about business from industry leaders.
                      </h2>

                      <div>
                          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScMf1mo16Z6W1-JXVMc24-AYNK1qzQPc4OmKZhCQXSCrlgEAQ/viewform" className="pr-2">
                              <button className='bg-dark-periwinkle hover:bg-blue-900 px-4 py-3 font-medium text-2xl rounded-md mt-10 object-right'>
                                  Register Now
                              </button>
                          </Link>
                          <Link href="/event-details" className="pl-2">
                              <button className='bg-dark-periwinkle hover:bg-blue-900 px-4 py-3 font-medium text-2xl rounded-md mt-10 object-left'>
                                  Event Details
                              </button>
                          </Link>
                      </div>
                  </div>
              </div>
          </header>

          <div className="flex p-10 flex-col items-center lg:flex-row lg:p-20 xl:p-40 lg:items-left bg-gray-50">
              <div className="flex flex-col items-center lg:items-start w-4/5 text-center lg:text-left mb-4 lg:mb-0">
                  <h1 className="text-5xl text-black font-bold">Preparing future business leaders.</h1>

                  <p className="text-2xl text-gray-600 font-light mt-2 w-3/4 pt-3 pb-5">
                      Ambition Conference provides students the opportunity to build a network while developing business fundamentals.
                      Through guest speakers and workshops, we develop necessary skills with an innovative and exciting approach.
                  </p>

                  <div className='my-4'>
                      <Link href="/event-details">
                          <button className='px-6 py-3 border-dark-periwinkle text-dark-periwinkle border rounded-lg font-medium text-lg'>
                              Event details
                          </button>
                      </Link>
                  </div>
              </div>

              <div className="flex-col w-3/4">
                  <Image width={700} height={700} className="filter duration-75 rounded-lg object-cover object-center" src="/guestSpeaker.jpg" alt="Team of Students" quality={100} />
              </div>
          </div>

          <div className="flex p-10 flex-col items-center lg:flex-row-reverse lg:p-20 xl:p-40 lg:items-center justify-between bg-white">
              <div className="flex flex-col items-center lg:items-end w-4/5 text-center lg:text-right mb-4 lg:mb-0 lg:ml-16">
                  <h1 className="text-5xl text-black font-bold">Hosted for students, by students.</h1>

                  <p className="text-2xl text-gray-600 font-light mt-2 w-3/4 pt-3 pb-5">
                      Ambition Conference is a student-led initiative that aims to inspire and prepare youth for the post-secondary business world.
                  </p>

                  <div className='my-4'>
                      <Link href="/team">
                          <button className='px-6 py-3 border-sky-700 text-sky-700 border rounded-lg font-medium text-lg'>
                              Meet the Team
                          </button>
                      </Link>
                  </div>
              </div>

              <div className="flex-col w-3/4">
                  <Image width={700} height={700} className="object-cover object-center filter duration-75 rounded-lg" src="/students.jpg" alt="Team of Students" quality={100} />
              </div>
          </div>
      </Layout>
  )
}
