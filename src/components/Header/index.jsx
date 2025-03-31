import styled from 'styled-components'
import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import Logo from '../Logo'

const itensHeader = ['Categorias', 'Favoritos', 'Minha estante']
const iconesHeader = [perfil, sacola]

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

const Header = () => {
  return (
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
  )
}

export default Header