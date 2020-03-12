import React from "react"
import styled from "styled-components"
import Card from "./Card"

const Cards = styled.ul`
  margin: 0 0 1rem;
  padding: 0;
`

export default ({ cards }) => (
  <Cards>
    {cards.map(card => (
      <Card key={card.title} {...card} />
    ))}
  </Cards>
)
