import React from "react"
import styled from "styled-components"
import { H2, H3, P, Ul, Li, H4 } from "./Typography"
import Cards from "./Cards"

const Wrapper = styled.div``

const Block = ({
  type,
  title,
  company,
  start,
  end,
  description,
  blocks,
  cards,
  list,
}) => {
  if (type === "first") {
    return (
      <Wrapper>
        {title && <H2>{title}</H2>}
        {description && <P>{description}</P>}
        {blocks && blocks.map(block => <Block key={block.id} {...block} />)}
      </Wrapper>
    )
  } else if (type === "second") {
    return (
      <Wrapper>
        {title && (
          <H3>
            {title}
            {company && <span>, {company}</span>}
            {start && end && (
              <span>
                , {start}-{end}
              </span>
            )}
          </H3>
        )}
        {description && <P>{description}</P>}
        {list && (
          <Ul>
            {list.map(item => (
              <Li key={item}>{item}</Li>
            ))}
          </Ul>
        )}
        {cards && <Cards cards={cards} />}
        {blocks && blocks.map(block => <Block key={block.id} {...block} />)}
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      {title && description && (
        <P>
          {<H4>{title}</H4>}: {description}
        </P>
      )}
      {list && (
        <Ul>
          {list.map(item => (
            <Li key={item}>{item}</Li>
          ))}
        </Ul>
      )}
      {blocks && blocks.map(block => <Block key={block.id} {...block} />)}
    </Wrapper>
  )
}

export default Block
