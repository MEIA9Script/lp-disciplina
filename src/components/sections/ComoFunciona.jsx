import './ComoFunciona.css'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { PASSOS } from '../../data/content'

export default function ComoFunciona() {
  return (
    <section className="secao como-funciona" id="como-funciona">
      <div className="container">
        <TituloSecao
          eyebrow="Depois da compra"
          titulo="Três passos entre agora e a primeira tarefa"
          apoio="Nada de espera, de liberação em lote ou de área de membros para descobrir. É um arquivo que chega no seu e-mail."
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
