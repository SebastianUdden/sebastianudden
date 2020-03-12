import React from "react"
import styled from "styled-components"
import { P, A } from "./Typography"
import Link from "./Link"

const Card = styled.li`
  display: block;
  margin: 0.5rem 0;
  background-color: #2b2b2b;
  :hover {
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
  }
`

const Title = styled.h3`
  font-size: 14px;
  padding: 0.8rem;
  margin: 0;
`

export default ({ title, to, href, description }) => (
  <Card>
    {to ? (
      <Link to={to}>
        <Title>{title}</Title>
        {description && <P>{description}</P>}
      </Link>
    ) : (
      <A href={href} target="_blank">
        <Title>{title}</Title>
        {description && <P>{description}</P>}
      </A>
    )}
  </Card>
)
