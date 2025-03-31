import styled from "styled-components"
import InputEstilizado from "../InputEstilizado"

const SectionPesquisa = styled.section`
  margin-top: 24px;
  padding: 32px;
  text-align: center;
`
const TituloEstilizado = styled.h1`
  margin-bottom: 24px;
  color: #FFF;
  font-size: 32px;
`
const TextoEstilizado = styled.p`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
`

const Pesquisa = () => {
  return (
    <SectionPesquisa>
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
    </SectionPesquisa>
  )
}

export default Pesquisa