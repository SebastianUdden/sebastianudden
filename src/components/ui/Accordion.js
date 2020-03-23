import React, { useState } from "react"
import styled from "styled-components"

const Accordion = styled.ul`
  margin: 0 0 1rem;
  padding: 0;
`
const Wrapper = styled.li`
  display: block;
  margin: 0 0 0.5rem 0;
`
const Title = styled.h2`
  background-color: #2b2b2b;
  font-size: 18px;
  padding: 0.8rem;
  margin: 0;
  :hover {
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
  }
`
const Collapsible = styled.div`
  max-height: ${p => (p.show ? "100vh" : "0px")};
  overflow: hidden;
  transition: max-height 0.25s ease-in-out;
`
const Description = styled.p`
  margin: 0;
  padding: 0.8rem;
  font-size: 14px;
`

const Item = ({ title, description }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Wrapper onClick={() => setShow(!show)}>
        <Title>{title}</Title>
        <Collapsible show={show}>
          <Description>{description}</Description>
        </Collapsible>
      </Wrapper>
    </>
  )
}

export default ({ list }) => (
  <Accordion>
    {list.map(item => (
      <Item key={item.title} {...item} />
    ))}
  </Accordion>
)
