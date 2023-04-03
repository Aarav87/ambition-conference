import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import {notion} from "@/pages/index";

export default function EventDetails({ guestSpeakers }) {
    return (
        <Layout pageTitle="Event Details">
            <header className="h-[40vh] lg:h-[44vh] relative">
                <Image
                    src="/heroBanner/event-details.jpg"
                    alt="Hero Image"
                    layout="fill"
                    className="saturate-150 object-cover object-center"
                    quality={100}
                />

                <div className="relative z-1 h-[40vh] flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="font-bold mt-4 text-3xl xs:text-5xl md:text-7xl">
                            Event Details
                        </h1>
                    </div>
                </div>
            </header>

            <div className="flex p-10 flex-col items-center lg:flex-row lg:p-20 xl:p-40 lg:items-left bg-gray-50">
                <div className="flex flex-col items-center lg:items-start w-4/5 text-center lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-5xl text-black font-bold">Location & Timing</h1>

                    <p className="text-xl text-gray-600 font-light mt-2 w-3/4 pt-3 pb-5">
                        The 2023 Ambition Conference will take place at St. Francis Xavier Secondary School, in Mississauga, Ontario
                        on Monday, April 3rd, from 6-9pm.
                    </p>

                    <div className='my-4'>
                        <Link href="https://goo.gl/maps/3WhNG5PiDEf3NCgCA">
                            <button className='px-6 py-3 border-dark-periwinkle text-dark-periwinkle border rounded-lg font-medium text-lg'>
                                Directions
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex-col w-3/4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.6943399111024!2d-79.66675208501749!3d43.61290547912274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b40b93ac4ea7d%3A0x59b211451e79d796!2sSt.%20Francis%20Xavier%20Secondary%20School!5e0!3m2!1sen!2sca!4v1680212526679!5m2!1sen!2sca"
                        height="400"
                        width="400"
                        className="border-0 filter duration-75 rounded-lg sm:h-[30vh] md:h-[40vh] lg:h-[50vh] w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            <div className="flex p-10 flex-col items-center lg:flex-row-reverse lg:p-20 xl:p-40 lg:items-center justify-between bg-white">
                <div className="flex flex-col items-center lg:items-end w-4/5 text-center lg:text-right mb-4 lg:mb-0 lg:ml-16">
                    <h1 className="text-5xl text-black font-bold">Activities</h1>

                    <p className="text-xl text-gray-600 font-light mt-2 w-3/4 pt-3 pb-5">
                        Ambition Conference will have many fun activities that will help you grasp the basics of business and finance.
                        There will also be prizes for the winners 🏆.
                    </p>

                    <div className='my-4 space-x-2'>
                        <Link href="https://docs.google.com/document/d/1SWACHL251fO5q3ViE2ejCG2pNxL2Vugm7mCxKQx1Fxk/edit">
                            <button className='px-6 py-3 border-dark-periwinkle text-dark-periwinkle border rounded-lg font-medium text-lg mt-3 object-left'>
                                Activity 1
                            </button>
                        </Link>

                        <Link href="https://docs.google.com/document/u/0/d/1Mo1yOFSzorbBvsG6mIrzhLdmSRytrX7l-xc1wXyMjpA/edit?pli=1">
                            <button className='px-6 py-3 border-dark-periwinkle text-dark-periwinkle border rounded-lg font-medium text-lg mt-3 object-right'>
                                Activity 2
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex-col w-3/4">
                    <Image width={700} height={700} className="object-cover object-center filter duration-75 rounded-lg" src="/activity.JPG" alt="Team of Students" quality={100} />
                </div>
            </div>

            <div className="flex p-10 flex-col items-center lg:p-20 items-left py-36 bg-gray-50">
                <div className="flex flex-col text-center">
                    <h1 className="text-5xl text-black font-bold">Guest Speakers</h1>
                </div>

                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-16 md:p-24 lg:p-30 pt-20 gap-10 overflow-hidden">
                    {guestSpeakers.map((speaker) => (
                        <div key={speaker.name}>
                            <Image
                                src={speaker.img}
                                alt={speaker.name}
                                height={500}
                                width={500}
                                className="aspect-square rounded-lg"
                                placeholder="blur"
                                blurDataURL={speaker.blurDataURL}
                            />
                            <h1 className="text-3xl font-bold text-gray-800 mt-4 text-center">{speaker.name}</h1>
                            <h1 className="text-xl font-semibold text-gray-500 my-1 text-center">{speaker.position}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticProps() {
    const response = await notion.databases.query({
        database_id: process.env.EVENT_DETAILS_DB_ID
    });

    const guestSpeakers = [];
    response.results.forEach((result) => {
        guestSpeakers.push({
            name: result.properties.Name.title[0].text.content,
            img: result.properties.img.url,
            blurDataURL: result.properties.blurDataURL.rich_text[0].plain_text,
            position: result.properties.Role.rich_text[0].plain_text
        })
    })

    return {
        props: {
            guestSpeakers: guestSpeakers
        }
    }
}