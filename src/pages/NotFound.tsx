import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function NotFound() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }
  return (
    <Container>
      <h1>잘못된 접근입니다. </h1>
      <button onClick={goBack}>첫 화면 바로가기</button>
    </Container>
  )
}

const Container = styled.div`
  margin: 64px auto;
  width: 100%;
  max-width: 400px;
  text-align: center;
`
