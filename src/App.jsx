import './App.css'
import EstilosGlobais from './components/EstilosGlobais'
import Logo from './components/Logo'
import perfil from './images/perfil.svg'
import sacola from './images/sacola.svg'

const itensHeader = ['Categorias', 'Favoritos', 'Minha estante']
const iconesHeader = [perfil, sacola]

const App = () => {
  return (
    <div className='App'>
      <EstilosGlobais />
      <header className="App-header">
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
      </header>
    </div>
  )
}

export default App