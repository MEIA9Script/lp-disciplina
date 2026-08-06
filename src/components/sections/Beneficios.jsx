import './Beneficios.css'
import Icone from '../ui/Icone'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { BENEFICIOS } from '../../data/content'

export default function Beneficios() {
  return (
    <section className="secao beneficios" id="beneficios">
      <div className="container">
        <TituloSecao
          eyebrow="Por que funciona"
          titulo="Método não é o que falta. Rotina é."
          apoio="Cada parte do material existe para resolver um motivo específico de abandono. É isso que separa quem executa por trinta dias de quem para na primeira semana difícil."
        />

        <div className="beneficios__grade">
          {BENEFICIOS.map((item, i) => (
            <Reveal key={item.titulo} as="article" className="beneficio vidro" atraso={i * 70}>
              <span className="beneficio__icone">
                <Icone nome={item.icone} tamanho={22} />
              </span>
              <h3 className="beneficio__titulo">{item.titulo}</h3>
              <p className="beneficio__texto">{item.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
