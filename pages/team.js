import Layout from "@/components/layout";
import { notion } from "@/pages/index";
import Image from "next/image";

export default function TeamPage({ coHeads, teams }) {
    return (
        <Layout pageTitle="Team">
            <header className="h-[40vh] lg:h-[44vh] relative">
                <Image
                    src="/heroBanner/team.jpg"
                    alt="Hero Image"
                    layout="fill"
                    className="saturate-150 object-cover object-top"
                    quality={100}
                />

                <div className="relative z-1 h-[40vh] flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="font-bold mt-4 text-3xl xs:text-5xl md:text-7xl">
                            Team
                        </h1>
                    </div>
                </div>
            </header>

            <div className="flex p-20 flex-col items-center items-left">
                <h1 className="text-5xl lg:text-5xl text-black font-bold">Co-Heads</h1>
            </div>

            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-16 md:p-24 lg:p-30 pt-0 md:pt-0 lg:pt-0 gap-10">
                {coHeads.map((coHead) => (
                    <a key={coHead.name}>
                        <Image
                            src={coHead.img}
                            alt={coHead.name}
                            quality={100}
                            height={500}
                            width={500}
                            className="object-cover mx-auto"
                            placeholder="blur"
                            blurDataURL={coHead.blurDataURL}
                        />
                        <h1 className="text-3xl text-gray-800 mt-4 text-center">{coHead.name}</h1>
                    </a>
                ))}
            </div>

            <div className="flex pb-20 flex-col items-center items-left">
                <h1 className="text-5xl lg:text-5xl text-black font-bold">Teams</h1>
            </div>

            <div className="mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-16 md:p-20 lg:p-30 pt-0 md:pt-0 lg:pt-0 gap-2 md:gap-10">
                {teams.map((team) => (
                    <a key={team.name}>
                        <Image
                            src={team.img}
                            alt={team.name}
                            quality={100}
                            height={700}
                            width={700}
                            className="object-fill mx-auto"
                            placeholder="blur"
                            blurDataURL={team.blurDataURL}
                        />
                        <h1 className="text-3xl text-gray-800 mt-4 text-center pt-3 pb-5">{team.name}</h1>
                    </a>
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const response = await notion.databases.query({
        database_id: process.env.TEAM_DB_ID
    });

    const coHeads = [];
    const teams = [];
    response.results.forEach((result) => {
        if (result.properties.Tags.multi_select[0].name === "Co-Head") {
            coHeads.push({
                name: result.properties.Name.title[0].text.content,
                img: result.properties.img.url,
                blurDataURL: result.properties.blurDataURL.rich_text[0].plain_text
            });
        } else {
            teams.push({
                name: result.properties.Name.title[0].text.content,
                img: result.properties.img.url,
                blurDataURL: result.properties.blurDataURL.rich_text[0].plain_text
            });
        }
    });

    return {
        props: {
            coHeads: coHeads,
            teams: teams
        }
    }
}