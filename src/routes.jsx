import { BrowserRouter, Routes, Route } from 'react-router'
import PaginaPadrao from './components/PaginaPadrao'
import Pesquisa from './components/Pesquisa'
import Estante from './pages/Estante'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <PaginaPadrao /> }>
          <Route index element={ <Pesquisa /> } />
          <Route path='categorias' element={ <h1>Categorias</h1> } />
          <Route path='favoritos' element={ <h1>Favoritos</h1> } />
          <Route path='estante' element={ <Estante /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes