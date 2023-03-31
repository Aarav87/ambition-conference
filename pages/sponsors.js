import Layout from "@/components/layout";
import ExportedImage from "next-image-export-optimizer";
import SponsorsHero from "@/public/heroBanner/sponsors.jpg";
import {notion} from "@/pages/index";
import Link from "next/link";

export default function Sponsors({ sponsors }) {
    return (
        <Layout pageTitle="Sponsors">
            <header className="h-[40vh] lg:h-[44vh] relative">
                <ExportedImage
                    src={SponsorsHero}
                    placeholder="blur"
                    alt="Hero Image"
                    layout="fill"
                    className="saturate-150 object-cover object-center"
                    quality={100}
                />

                <div className="relative z-1 h-[40vh] flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="font-bold mt-4 text-3xl xs:text-5xl md:text-7xl">
                            Sponsors
                        </h1>
                    </div>
                </div>
            </header>

            <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-16 md:p-24 lg:p-30 pt-20 gap-10">
                {sponsors.map((sponsor) => (
                    <Link key={sponsor.name} href={sponsor.website}>
                        <ExportedImage
                            src={sponsor.logo}
                            alt={sponsor.name}
                            quality={100}
                            height={500}
                            width={500}
                            className="object-cover mx-auto"
                        />
                    </Link>
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const response = await notion.databases.query({
        database_id: process.env.SPONSORS_DB_ID
    });

    const sponsorsList = [];
    response.results.forEach((result) => {
        sponsorsList.push({
            name: result.properties.Name.title[0].text.content,
            logo: result.properties.Logo.files[0].file.url,
            website: result.properties.Website.rich_text[0].href
        })
    })

    return {
        props: {
            sponsors: sponsorsList
        }
    }
}