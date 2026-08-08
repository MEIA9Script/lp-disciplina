import './Publico.css'
import Icone from '../ui/Icone'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { PUBLICO } from '../../data/content'

/**
 * "Para quem e" e "para quem nao e" na mesma secao, lado a lado.
 *
 * Antes eram duas secoes empilhadas, o que dobrava a rolagem no
 * celular. Juntas, a comparacao acontece na mesma tela e o visitante
 * se qualifica sozinho.
 */
export default function Publico() {
  return (
    <section className="secao publico" id="para-quem-e">
      <div className="container">
        <TituloSecao eyebrow={PUBLICO.eyebrow} titulo={PUBLICO.titulo} apoio={PUBLICO.apoio} />

        <div className="publico__colunas">
          <Reveal className="publico__coluna publico__coluna--sim">
            <h3 className="publico__cabecalho">
              <span className="publico__marca publico__marca--sim">
                <Icone nome="check" tamanho={14} />
              </span>
              É para você se
            </h3>
            <ul className="publico__lista">
              {PUBLICO.sim.map((item) => (
                <li key={item} className="publico__item">
                  <span className="publico__ponto publico__ponto--sim" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="publico__coluna publico__coluna--nao" atraso={90}>
            <h3 className="publico__cabecalho">
              <span className="publico__marca publico__marca--nao">
                <Icone nome="x" tamanho={14} />
              </span>
              Não compre se
            </h3>
            <ul className="publico__lista">
              {PUBLICO.nao.map((item) => (
                <li key={item} className="publico__item">
                  <span className="publico__ponto publico__ponto--nao" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
