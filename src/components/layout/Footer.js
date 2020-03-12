import React from "react"
import styled from "styled-components"
import { darkGrey } from "../../constants/colors"
import LinkedIn from "../../images/linkedin.js"
import Github from "../../images/github.js"

const Wrapper = styled.div`
  background-color: ${darkGrey};
  padding: 1rem;
`

const InnerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  max-width: 700px;
  margin: 0 auto;
`

const A = styled.a`
  text-decoration: none;
  margin-left: 1rem;
  :active,
  :visited,
  :hover {
    color: orange;
  }
`

export default () => (
  <Wrapper>
    <InnerWrapper>
      <A href="https://github.com/sebastianudden" target="blank">
        <Github color="white" />
      </A>
      <A href="https://linkedin.com/in/sebastianudden" target="blank">
        <LinkedIn color="white" />
      </A>
    </InnerWrapper>
  </Wrapper>
)
