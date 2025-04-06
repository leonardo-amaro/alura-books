import styled from "styled-components"
import { useEffect, useState } from "react"
import { getLivros } from "../../services/livros"

async function fetchLivros() {
  return await getLivros()
}

const SectionEstante = styled.section`
  margin-top: 24px;
  padding: 32px;
  text-align: center;
`
const TituloEstilizado = styled.h1`
  margin-bottom: 24px;
  color: #FFF;
  font-size: 32px;
`

const Estante = () => {
  const [livros, setLivros] = useState([])

  useEffect(() => {
    fetchLivros().then((resposta) => setLivros(resposta))
  }, [])

  return (
    <SectionEstante>
      <TituloEstilizado>
        Estante
      </TituloEstilizado>
      <ul>
        {livros.map(
          (livro) => <li key={livro.id}>{livro.titulo}</li>
        )}
      </ul>
    </SectionEstante>
  )
}

export default Estante