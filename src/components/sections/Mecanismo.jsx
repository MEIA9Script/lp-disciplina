import './Mecanismo.css'
import Icone from '../ui/Icone'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { MECANISMO } from '../../data/content'

/**
 * O "o que e" da pagina, em tres pecas.
 *
 * Substitui a antiga secao de seis beneficios: para trafego frio de
 * baixo ticket, tres blocos explicam o mecanismo e liberam a oferta
 * logo em seguida. Seis cards so empurravam o preco para baixo.
 */
export default function Mecanismo() {
  return (
    <section className="secao mecanismo" id="o-que-e">
      <div className="container">
        <TituloSecao eyebrow={MECANISMO.eyebrow} titulo={MECANISMO.titulo} apoio={MECANISMO.apoio} />

        <div className="mecanismo__grade">
          {MECANISMO.pecas.map((peca, i) => (
            <Reveal key={peca.titulo} as="article" className="peca vidro" atraso={i * 80}>
              <div className="peca__topo">
                <span className="peca__icone">
                  <Icone nome={peca.icone} tamanho={22} />
                </span>
                <span className="peca__numero" aria-hidden="true">
                  {peca.numero}
                </span>
              </div>
              <h3 className="peca__titulo">{peca.titulo}</h3>
              <p className="peca__texto">{peca.texto}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="mecanismo__fecho">
          {MECANISMO.fecho}
        </Reveal>
      </div>
    </section>
  )
}
