import React from "react"
import Layout from "../components/layout/Layout"
import { H1, P } from "../components/ui/Typography"
import Cards from "../components/ui/Cards"

export default ({
  pageContext: {
    home: { title, description, coreValues },
    categories,
  },
}) => (
  <Layout meta={{ title: "Home" }} categories={categories}>
    <H1>{title}</H1>
    <P>{description}</P>
    {coreValues && <Cards cards={coreValues} />}
  </Layout>
)
