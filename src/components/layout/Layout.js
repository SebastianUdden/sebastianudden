import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
`
const Body = styled.div`
  flex: 1 0 auto;
  padding: 0 1rem 4rem;
  margin: 0 auto;
  max-width: 700px;
  @media (min-width: 600px) {
    width: 100%;
  }
`

export default ({ meta, categories, children }) => {
  return (
    <Wrapper>
      <Header meta={meta} categories={categories} />
      <Body>{children}</Body>
      <Footer />
    </Wrapper>
  )
}
