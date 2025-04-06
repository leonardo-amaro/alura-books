import { BrowserRouter, Routes, Route } from 'react-router'
import PaginaPadrao from './components/PaginaPadrao'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <PaginaPadrao /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes