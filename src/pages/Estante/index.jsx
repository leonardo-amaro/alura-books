import { useEffect, useState } from "react"
import { getLivros } from "../../services/livros"
import SectionEstilizada from "../../components/SectionEstilizada"
import TituloEstilizado from "../../components/TituloEstilizado"

async function fetchLivros() {
  return await getLivros()
}

const Estante = () => {
  const [livros, setLivros] = useState([])

  useEffect(() => {
    fetchLivros().then((resposta) => setLivros(resposta))
  }, [])

  return (
    <SectionEstilizada>
      <TituloEstilizado>
        Estante
      </TituloEstilizado>
      <ul>
        {livros.map(
          (livro) => <li key={livro.id}>{livro.titulo}</li>
        )}
      </ul>
    </SectionEstilizada>
  )
}

export default Estante