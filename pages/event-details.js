import Layout from "@/components/layout";
import Image from "next/image";
import EventDetailsHero from "@/public/heroBanner/event-details.jpg";
import Link from "next/link";

export default function EventDetails() {
    return (
        <Layout pageTitle="Event Details">
            <header className="h-[40vh] lg:h-[44vh] relative">
                <Image
                    src={EventDetailsHero}
                    placeholder="blur"
                    alt="Hero Image"
                    layout="fill"
                    className="saturate-150 object-cover object-top"
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

            <div className="flex p-10 flex-col items-center lg:flex-row lg:p-20 xl:p-40 lg:py-10 xl:py-20 lg:items-left bg-gray-50">
                <div className="flex flex-col items-center lg:items-start w-4/5 text-center lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-5xl text-black font-bold">Location</h1>

                    <p className="text-2xl text-gray-600 font-light mt-2 w-3/4 pt-3 pb-5">
                        The 2023 Ambition Conference will take place at St. Francis Xavier Secondary School, in Mississauga, Ontario
                        on Monday, April 3rd, 2023 from 6-9pm.
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
        </Layout>
    )
}