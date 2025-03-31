import logo from '../../images/logo.svg'
import styled from 'styled-components'

const LogoEstilizado = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 32px;
`

const Logo = () => {
  return (
    <LogoEstilizado>
      <img src={logo} alt="Logo Alura Books" />
      <p>
        <strong>Alura</strong>Books
      </p>
    </LogoEstilizado>
  )
}

export default Logo