import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"

const Hakkimda = ({ data, location }) => {
  return (
    <Layout location={location} title="Portfolyo">
      <Seo title="Mustafa Özgün hakkında bilinmesi veya bilinmesi çok da gerekli olmayan şeyler..." />
      <Bio />

      <h1>
        Aliquip eu exercitation velit reprehenderit excepteur magna tempor
        ullamco mollit ipsum sit ad minim elit.
      </h1>
    </Layout>
  )
}

export default Hakkimda
