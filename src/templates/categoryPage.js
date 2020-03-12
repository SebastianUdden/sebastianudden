import React from "react"
import Layout from "../components/layout/Layout"
import Block from "../components/ui/Block"
import { H1, P } from "../components/ui/Typography"

export default ({ pageContext: { categories, page } }) => {
  return (
    <Layout meta={{ title: page.title }} categories={categories}>
      <H1>{page.title}</H1>
      {page.description && <P>{page.description}</P>}
      {page.blocks &&
        page.blocks.map(block => <Block key={block.id} {...block} />)}
    </Layout>
  )
}
