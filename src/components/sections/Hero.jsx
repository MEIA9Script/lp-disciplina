import './Hero.css'
import Botao from '../ui/Botao'
import Icone from '../ui/Icone'
import PainelDisciplina from '../ui/PainelDisciplina'
import { HERO } from '../../data/content'

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="container hero__interno">
        <div className="hero__texto">
          <p className="hero__eyebrow entrada">
            <span className="hero__eyebrow-ponto" aria-hidden="true" />
            {HERO.eyebrow}
          </p>

          <h1 className="hero__titulo entrada" style={{ animationDelay: '90ms' }}>
            {HERO.titulo[0]}{' '}
            <span className="hero__destaque">
              {HERO.titulo[1]}{' '}
              <span className="hero__palavra">
                {HERO.titulo[2]}
                <svg className="hero__sublinhado" viewBox="0 0 320 12" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M2 8.5C70 3.5 190 2 318 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="hero__subtitulo entrada" style={{ animationDelay: '180ms' }}>
            {HERO.subtitulo}
          </p>

          <ul className="hero__lista entrada" style={{ animationDelay: '260ms' }}>
            {HERO.beneficios.map((item) => (
              <li key={item} className="hero__item">
                <span className="hero__check" aria-hidden="true">
                  <Icone nome="check" tamanho={13} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="hero__preco entrada" style={{ animationDelay: '320ms' }}>
            <span className="hero__preco-valor">{HERO.preco.valor}</span>
            <span className="hero__preco-apoio">{HERO.preco.apoio}</span>
          </div>

          <div className="hero__acoes entrada" style={{ animationDelay: '340ms' }}>
            <Botao variante="compra" tamanho="lg" origem="hero" bloco>
              QUERO ACESSAR AGORA
            </Botao>
            <Botao variante="zap" destino="whatsapp" origem="hero" bloco>
              QUERO MEU DESCONTO
            </Botao>
            <p className="hero__nota">
              A compra direta libera o acesso na hora. Se preferir conversar antes, o WhatsApp fica aberto.
            </p>
          </div>

          <ul className="hero__selos entrada" style={{ animationDelay: '420ms' }}>
            {HERO.selos.map((selo) => (
              <li key={selo} className="hero__selo">
                <Icone nome="cadeado" tamanho={13} />
                {selo}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual entrada" style={{ animationDelay: '300ms' }}>
          <PainelDisciplina />
        </div>
      </div>
    </section>
  )
}
