import './CtaFinal.css'
import Botao from '../ui/Botao'
import Icone from '../ui/Icone'
import Reveal from '../ui/Reveal'
import { CTA_FINAL, HERO, LINKS } from '../../data/content'
import { rastrearCheckout } from '../../lib/analytics'

export default function CtaFinal() {
  return (
    <section className="secao cta-final" id="comprar">
      <div className="container">
        <Reveal className="cta-final__bloco">
          <div className="cta-final__aura" aria-hidden="true" />

          {/* A grade de constancia volta aqui, agora com o proximo dia em aberto */}
          <div className="cta-final__grade" aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => (
              <span key={i} className={`cta-final__dia ${i < 11 ? 'is-feito' : ''} ${i === 11 ? 'is-hoje' : ''}`} />
            ))}
          </div>

          <p className="cta-final__eyebrow">{CTA_FINAL.eyebrow}</p>
          <h2 className="cta-final__titulo">{CTA_FINAL.titulo}</h2>
          <p className="cta-final__texto">{CTA_FINAL.texto}</p>

          <div className="cta-final__preco">
            <span className="cta-final__valor">{CTA_FINAL.preco}</span>
            <span className="cta-final__apoio">{CTA_FINAL.precoApoio}</span>
          </div>

          <div className="cta-final__acoes">
            <Botao variante="compra" tamanho="lg" origem="cta-final" bloco>
              COMPRAR AGORA
            </Botao>
          </div>

          <p className="cta-final__inicial">
            {CTA_FINAL.inicial}{' '}
            <a href={LINKS.checkoutInicial} onClick={() => rastrearCheckout('cta-final-inicial')}>
              {CTA_FINAL.inicialLink}
            </a>
          </p>

          <ul className="cta-final__selos">
            {HERO.selos.map((selo) => (
              <li key={selo}>
                <Icone nome="check" tamanho={13} />
                {selo}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
