import './Estrelas.css'
import Icone from './Icone'

/** Nota do depoimento, de 0 a 5. */
export default function Estrelas({ nota = 5 }) {
  return (
    <div className="estrelas" role="img" aria-label={`Nota ${nota} de 5`}>
      {[1, 2, 3, 4, 5].map((posicao) => (
        <Icone
          key={posicao}
          nome="estrela"
          tamanho={15}
          preenchido
          className={`estrelas__item ${posicao <= nota ? 'is-ativa' : ''}`}
        />
      ))}
    </div>
  )
}
