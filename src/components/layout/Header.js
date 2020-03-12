import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SEO from "../seo"
import Link from "../ui/Link"
import { darkGrey } from "../../constants/colors"

const Wrapper = styled.div`
  background-color: ${darkGrey};
  top: 0;
  position: sticky;
  transform: ${p => (p.show ? "translateY(0%)" : "translateY(-100%)")};
  transition: transform 0.4s;
  width: 100%;
`
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  padding: 1rem;
  margin: 0 auto;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
`

const ListItem = styled(Link)`
  margin-left: 1rem;
`
const HomeLink = styled(Link)`
  font-size: 18px;
`
const ListLink = ({ to, children }) => <ListItem to={to}>{children}</ListItem>

export default ({ meta, categories = [] }) => {
  if (typeof window === "undefined") return null
  let [position, setPosition] = useState(window.pageYOffset)
  let [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      let tempPosition = window.pageYOffset

      if (position > 100) {
        setVisible(position > tempPosition)
      } else {
        setVisible(true)
      }
      setPosition(tempPosition)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  return (
    <Wrapper show={visible}>
      <SEO {...meta} />
      <InnerWrapper>
        <HomeLink to="/">Sebastian Uddén</HomeLink>
        <List>
          {categories.map(category => (
            <ListLink key={category.slug} to={category.slug}>
              {category.title}
            </ListLink>
          ))}
        </List>
      </InnerWrapper>
    </Wrapper>
  )
}
