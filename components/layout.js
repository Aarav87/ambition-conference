import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Layout({ children, pageTitle }) {
    const title = `Ambition Conferences | ${pageTitle}`
    const description = 'Ambition Conferences is ...'

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                {children}
            </motion.div>
            <Footer />
        </div>
    )
}