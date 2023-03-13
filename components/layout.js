import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout({ children, pageTitle, description }) {
    const title = `Ambition Conferences | ${pageTitle}`

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}