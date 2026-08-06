import './Publico.css'
import Icone from '../ui/Icone'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { PARA_QUEM_NAO_E } from '../../data/content'

export default function ParaQuemNaoE() {
  return (
    <section className="secao publico publico--nao" id="para-quem-nao-e">
      <div className="container container--estreito">
        <TituloSecao
          eyebrow="Para quem não é"
          tom="apoio"
          titulo="E é honesto dizer para quem não serve"
          apoio="Prefiro perder a venda agora a ter alguém frustrado depois. Se um destes pontos é o seu caso, não compre."
        />

        <ul className="publico__lista publico__lista--nao">
          {PARA_QUEM_NAO_E.map((item, i) => (
            <Reveal key={item} as="li" className="publico__item vidro" atraso={i * 55}>
              <span className="publico__marca publico__marca--nao">
                <Icone nome="x" tamanho={14} />
              </span>
              {item}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
