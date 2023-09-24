import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { fetchCharacterDetail } from '../apis/apis'

export default function CharacterDetail() {
  const { id } = useParams()
  const { isLoading, isError, data } = useQuery(['characterDetail', id], () =>
    fetchCharacterDetail(Number(id))
  )

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error...</span>
  }

  const { name, films, imageUrl } = data

  return (
    <Container>
      <Thumbnail src={imageUrl} />
      <h2>{name}'s Films'</h2>
      <ul>
        {films.map((film, index) => (
          <li key={index}>{film}</li>
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
  text-align: center;
  h1 {
    margin-bottom: 40px;
  }
`

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
`
