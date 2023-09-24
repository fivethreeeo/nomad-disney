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
      <FilmList>
        {films.map((film, index) => (
          <Tag key={index}>{film}</Tag>
        ))}
      </FilmList>
    </Container>
  )
}

const Container = styled.div`
  margin: 64px auto;
  width: 100%;
  max-width: 400px;
  text-align: center;
  h1 {
    margin-bottom: 40px;
  }
`

const Thumbnail = styled.img`
  margin-bottom: 24px;
  width: 240px;
  height: 240px;
  border-radius: 100%;
  object-fit: cover;
  &:hover {
    border-radius: 0;
    object-fit: contain;
  }
`

const FilmList = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 8px;
`

const Tag = styled.li`
  padding: 8px 16px;
  background-color: #fff;
  color: #1d1d1d;
  border-radius: 8px;
`
