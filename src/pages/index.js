import React from "react"
/* import { Link } from "gatsby" */
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Checkout from "../components/checkout"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `e-commerce`]} />

    <Image />

    <div>
      <p>
        1959 was a pivotal year in the history of jazz music. <em>Kind of Blue, Time Out, Mingus Ah Um</em> and <em>The Shape of Jazz to Come</em> &mdash; a handful of iconic jazz albums to be produced that year.
      </p>
      <p>
        The stories behind these, and other albums that shaped jazz music.
      </p>
      <br />
      <br />
      <Checkout />
    </div>
  </Layout>
)

export default IndexPage
