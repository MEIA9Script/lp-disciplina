import './ComoFunciona.css'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { PASSOS } from '../../data/content'

export default function ComoFunciona() {
  return (
    <section className="secao como-funciona" id="como-funciona">
      <div className="container">
        <TituloSecao
          eyebrow="Como funciona"
          titulo="Três passos entre agora e a primeira tarefa"
          apoio="A numeração aqui é literal: um passo depende do anterior e o terceiro acontece hoje."
        />

        <ol className="passos">
          {PASSOS.map((passo, i) => (
            <Reveal key={passo.numero} as="li" className="passo" atraso={i * 110}>
              <div className="passo__marca">
                <span className="passo__numero">{passo.numero}</span>
              </div>
              <div className="passo__corpo vidro">
                <h3 className="passo__titulo">{passo.titulo}</h3>
                <p className="passo__texto">{passo.texto}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
