import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import Header from './components/Header'
import Pesquisa from './components/Pesquisa'

const AppContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const App = () => {
  return (
    <AppContainer>
      <EstilosGlobais />
      <Header />
      <Pesquisa />
    </AppContainer>
  )
}

export default App