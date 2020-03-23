import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/Layout"
import { H1, P } from "../components/ui/Typography"
import Cards from "../components/ui/Cards"
import Sebbe from "../images/Sebbe.png"
import Accordion from "../components/ui/Accordion"

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Image = styled.img`
  max-width: 100px;
`

export default ({
  pageContext: {
    home: { title, description, coreValues },
    categories,
  },
}) => (
  <Layout meta={{ title: "Home" }} categories={categories}>
    <H1>{title}</H1>
    <Row>
      <Column>
        <P>{description}</P>
      </Column>
      <Column>
        <Image src={Sebbe} />
      </Column>
    </Row>
    {coreValues && <Accordion list={coreValues} />}
  </Layout>
)
