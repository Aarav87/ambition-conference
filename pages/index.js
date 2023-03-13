import { Inter } from 'next/font/google'
import Layout from "@/components/layout";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <Layout
          pageTitle="Home"
          description="Home Page"
      >
          Home
      </Layout>
  )
}
