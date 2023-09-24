import { useQuery } from '@tanstack/react-query'
import { fetchCharacters } from '../apis/apis'
import styled from 'styled-components'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'

export default function Characters() {
  const navigate = useNavigate()
  const { isLoading, isError, data } = useQuery(['characters'], fetchCharacters)

  const goDetail = (id: number) => () => navigate(`character/${id}`)

  return (
    <Container>
      <h1>Disney Characters</h1>
      {isLoading ? (
        <span>Loading...</span>
      ) : isError ? (
        <span>Error...</span>
      ) : (
        <CardList>
          {data.slice(0, 100).map(card => (
            <Card key={card.id} handleClick={goDetail(card.id)} {...card} />
          ))}
        </CardList>
      )}
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
  background-color: #1d1d1d;
  color: #fff;
  text-align: center;
  h1 {
    margin-bottom: 40px;
  }
`

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16px;
  padding: 0;
  margin: 0;
`
