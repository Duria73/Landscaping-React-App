import * as React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Gallery from "../components/Gallery"
import Services from "../components/Services"
import Email from "../components/Email"
import Footer from "../components/Footer"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>

        <SEO title="Home" />
        <Header/>
        <Hero/>
        <Gallery heading="Our Gallery"/>
        <Services />
        <Email/>
        <Footer/>
 
  </Layout>
)

export default IndexPage
