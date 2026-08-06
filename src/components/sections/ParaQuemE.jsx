import './Publico.css'
import Icone from '../ui/Icone'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { PARA_QUEM_E } from '../../data/content'

export default function ParaQuemE() {
  return (
    <section className="secao publico" id="para-quem-e">
      <div className="container container--estreito">
        <TituloSecao
          eyebrow="Para quem é"
          titulo="Feito para quem quer começar e sustentar"
          apoio="Se você se reconhece em pelo menos três linhas abaixo, o material foi escrito para o seu caso."
        />

        <ul className="publico__lista publico__lista--sim">
          {PARA_QUEM_E.map((item, i) => (
            <Reveal key={item} as="li" className="publico__item vidro" atraso={i * 55}>
              <span className="publico__marca publico__marca--sim">
                <Icone nome="check" tamanho={14} />
              </span>
              {item}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
