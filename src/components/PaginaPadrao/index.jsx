import styled from 'styled-components'
import Header from '../Header'
import { Outlet } from 'react-router'

const AppContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const PaginaPadrao = ({ children }) => {
  return (
    <AppContainer>
      <Header />
      <Outlet />
      {children}
    </AppContainer>
  )
}

export default PaginaPadrao