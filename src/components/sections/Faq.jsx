import './Faq.css'
import { useState } from 'react'
import Botao from '../ui/Botao'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { FAQ } from '../../data/content'

export default function Faq() {
  // Acordeao de abertura unica: mantem a leitura focada em uma resposta por vez.
  const [aberta, setAberta] = useState(null)

  const alternar = (indice) => setAberta((atual) => (atual === indice ? null : indice))

  return (
    <section className="secao faq" id="faq">
      <div className="container container--estreito">
        <TituloSecao
          eyebrow="Dúvidas frequentes"
          titulo="Perguntas que costumam vir antes da compra"
          apoio="Se a sua dúvida não estiver aqui, me chame no WhatsApp antes de decidir."
        />

        <div className="faq__lista">
          {FAQ.map((item, i) => {
            const estaAberta = aberta === i
            return (
              <Reveal key={item.pergunta} className={`faq__item vidro ${estaAberta ? 'is-aberta' : ''}`} atraso={i * 40}>
                <h3 className="faq__cabecalho">
                  <button
                    type="button"
                    className="faq__botao"
                    aria-expanded={estaAberta}
                    aria-controls={`faq-resposta-${i}`}
                    id={`faq-pergunta-${i}`}
                    onClick={() => alternar(i)}
                  >
                    <span className="faq__pergunta">{item.pergunta}</span>
                    <span className="faq__sinal" aria-hidden="true">
                      <i />
                      <i />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq__painel"
                  id={`faq-resposta-${i}`}
                  role="region"
                  aria-labelledby={`faq-pergunta-${i}`}
                  hidden={!estaAberta}
                >
                  <p className="faq__resposta">{item.resposta}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="faq__ajuda">
          <p className="faq__ajuda-texto">Ficou com alguma dúvida específica sobre o seu caso?</p>
          <Botao variante="zap" destino="whatsapp" origem="faq">
            FALAR NO WHATSAPP
          </Botao>
        </Reveal>
      </div>
    </section>
  )
}
