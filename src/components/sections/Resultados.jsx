import './Resultados.css'
import Icone from '../ui/Icone'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { AVISO_RESULTADOS, RESULTADOS } from '../../data/content'

export default function Resultados() {
  return (
    <section className="secao resultados" id="resultados">
      <div className="container">
        <TituloSecao
          eyebrow="Expectativa"
          titulo="O que muda se você aplicar, e o que não vou prometer"
          apoio="Nenhum valor e nenhum prazo estão garantidos aqui. O que segue é a descrição do que o material se propõe a construir com você."
        />

        <div className="resultados__grade">
          {RESULTADOS.map((item, i) => (
            <Reveal key={item.titulo} as="article" className="resultado vidro" atraso={i * 80}>
              <span className="resultado__seta">
                <Icone nome="seta" tamanho={17} />
              </span>
              <h3 className="resultado__titulo">{item.titulo}</h3>
              <p className="resultado__texto">{item.texto}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="resultados__aviso">
          {AVISO_RESULTADOS}
        </Reveal>
      </div>
    </section>
  )
}
