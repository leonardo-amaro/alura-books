import styled from 'styled-components'
import Header from '../Header'
import Pesquisa from '../Pesquisa'

const AppContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const PaginaPadrao = () => {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  )
}

export default PaginaPadrao