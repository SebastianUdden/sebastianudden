import { Link as LinkUI } from "gatsby"
import styled from "styled-components"
import { white } from "../../constants/colors"

const Link = styled(LinkUI)`
  text-decoration: none;
  color: ${white};
  cursor: pointer;
  :hover {
    color: orange;
  }
`

export default Link
