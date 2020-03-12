import styled from "styled-components"
import { white } from "../../constants/colors"

export const H1 = styled.h1`
  border-top: 3px solid orange;
  margin: 1rem 0 5rem;
  padding-top: 0.5rem;
  font-size: 22px;
`
export const H2 = styled.h2`
  margin: 20px 0 10px;
  padding-bottom: 2px;
  color: ${white};
  border-bottom: 1px solid ${white};
  font-size: 16px;
  font-weight: 800;
`
export const H3 = styled.h3`
  margin: 2px 0;
  color: orange;
  font-size: 14px;
  font-weight: 800;
`
export const H4 = styled.h4`
  margin: 0;
  color: grey;
  display: inline;
`
export const H5 = styled.h5`
  margin: 0;
`
export const H6 = styled.h6`
  margin: 0;
`
export const P = styled.p`
  margin: 0 0 1rem;
  font-size: 14px;
  line-height: 18px;
`
export const Ul = styled.ul``
export const Li = styled.li`
  font-size: 14px;
`
export const A = styled.a`
  text-decoration: none;
  color: ${white};
  cursor: pointer;
  :hover {
    color: orange;
  }
`
