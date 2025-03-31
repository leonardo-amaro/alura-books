import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import Logo from './components/Logo'
import perfil from './images/perfil.svg'
import sacola from './images/sacola.svg'

const itensHeader = ['Categorias', 'Favoritos', 'Minha estante']
const iconesHeader = [perfil, sacola]

const AppContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
const HeaderEstilizado = styled.header`
  background-color: #f1f1f1;
  padding: 32px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    gap: 16px;
  }
  ul li {
    list-style-type: none;
    cursor: pointer;
    font-weight: 500;
  }
`

const App = () => {
  return (
    <AppContainer>
      <EstilosGlobais />
      <HeaderEstilizado>
        <Logo />
        <ul>
          {itensHeader.map(
            (item, index) => <li key={index}>{item}</li>
          )}
        </ul>
        <ul>
          {iconesHeader.map(
            (icone, index) => (
              <li key={index}>
                <img src={icone} alt="Icone" />
              </li>
            )
          )}
        </ul>
      </HeaderEstilizado>
    </AppContainer>
  )
}

export default App