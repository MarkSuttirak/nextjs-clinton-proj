import AboutUs from "@modules/about-us"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Aboutus: NextPageWithLayout = () => {
  return (
    <>
      <Head title="About Us" description="About Clinton" />
      <AboutUs />
    </>
  )
}

Aboutus.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Aboutus
