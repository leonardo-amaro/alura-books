import styled from "styled-components"
import SectionEstilizada from "../SectionEstilizada"
import TituloEstilizado from "../TituloEstilizado"
import InputEstilizado from "../InputEstilizado"

const TextoEstilizado = styled.p`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
`

const Pesquisa = () => {
  return (
    <SectionEstilizada>
      <TituloEstilizado>
        Já sabe por onde começar?
      </TituloEstilizado>
      <TextoEstilizado>
        Encontre um livro em nossa estante.
      </TextoEstilizado>
      <InputEstilizado 
        type="text"
        placeholder="Busque sua próxima leitura..." 
      />
    </SectionEstilizada>
  )
}

export default Pesquisa