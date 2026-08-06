import './TituloSecao.css'
import Reveal from './Reveal'

/**
 * Cabecalho padrao das secoes: eyebrow, titulo e apoio.
 * `tom` pinta o eyebrow com o roxo da marca (padrao) ou com o verde de apoio.
 */
export default function TituloSecao({ eyebrow, titulo, apoio, tom = 'marca', centro = true }) {
  return (
    <header className={`titulo-secao ${centro ? 'titulo-secao--centro' : ''}`}>
      {eyebrow && (
        <Reveal as="p" className={`titulo-secao__eyebrow titulo-secao__eyebrow--${tom}`}>
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h2" className="titulo-secao__titulo" atraso={60}>
        {titulo}
      </Reveal>
      {apoio && (
        <Reveal as="p" className="titulo-secao__apoio" atraso={120}>
          {apoio}
        </Reveal>
      )}
    </header>
  )
}
