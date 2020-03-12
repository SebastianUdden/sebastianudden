import React from "react"
import Layout from "../components/layout/Layout"
import { H1, P } from "../components/ui/Typography"

export default ({
  pageContext: {
    categories,
    page: { title, description },
  },
}) => {
  return (
    <Layout meta={{ title }} categories={categories}>
      <H1>{title}</H1>
      <P>{description}</P>
    </Layout>
  )
}
