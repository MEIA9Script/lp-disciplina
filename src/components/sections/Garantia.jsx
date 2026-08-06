import './Garantia.css'
import Icone from '../ui/Icone'
import Reveal from '../ui/Reveal'
import { GARANTIA } from '../../data/content'

export default function Garantia() {
  return (
    <section className="secao garantia" id="garantia">
      <div className="container">
        <Reveal className="garantia__bloco">
          <div className="garantia__aura" aria-hidden="true" />

          <div className="garantia__cabecalho">
            <span className="garantia__selo" aria-hidden="true">
              <Icone nome="escudo" tamanho={26} />
            </span>
            <div>
              <p className="garantia__eyebrow">Segurança da compra</p>
              <h2 className="garantia__titulo">{GARANTIA.titulo}</h2>
            </div>
          </div>

          <p className="garantia__texto">{GARANTIA.texto}</p>

          <ul className="garantia__itens">
            {GARANTIA.itens.map((item, i) => (
              <Reveal key={item.titulo} as="li" className="garantia__item" atraso={i * 60}>
                <span className="garantia__check">
                  <Icone nome="check" tamanho={13} />
                </span>
                <span>
                  <strong>{item.titulo}</strong>
                  {item.texto}
                </span>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
