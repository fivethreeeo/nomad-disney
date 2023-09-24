import styled from 'styled-components'
import { CharacterType } from '../types/types'

type CardProps = CharacterType & {
  handleClick: () => void
}

export default function Card({ name, imageUrl, handleClick }: CardProps) {
  return (
    <Container onClick={handleClick}>
      <Thumbnail src={imageUrl} />
      <p>{name}</p>
    </Container>
  )
}

const Container = styled.div`
  padding: 12px 4px;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #1d1d1d;
  }
`

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
`
