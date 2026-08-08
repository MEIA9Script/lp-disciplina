import './Hero.css'
import Botao from '../ui/Botao'
import Icone from '../ui/Icone'
import PainelDisciplina from '../ui/PainelDisciplina'
import { HERO, OFERTA } from '../../data/content'

/**
 * Primeira dobra de trafego frio.
 *
 * A ordem aqui e proposital: o que e o produto (eyebrow), o problema
 * em uma frase (h1), o que ele faz (subtitulo), o que chega na mao da
 * pessoa (cartao de entrega), quanto custa e o botao. Nenhum desses
 * blocos depende de rolagem no celular alem da lista de entrega.
 */
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

          {/* O que chega na mao da pessoa, ainda na primeira dobra */}
          <div className="hero__entrega entrada" style={{ animationDelay: '260ms' }}>
            <p className="hero__entrega-titulo">
              <Icone nome="mais" tamanho={14} />
              {HERO.entregaTitulo}
            </p>
            <ul className="hero__lista">
              {HERO.entrega.map((item) => (
                <li key={item} className="hero__item">
                  <span className="hero__check" aria-hidden="true">
                    <Icone nome="check" tamanho={13} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__acoes entrada" style={{ animationDelay: '340ms' }}>
            <Botao variante="compra" tamanho="lg" origem="hero" bloco pulsando seta>
              {HERO.cta}
            </Botao>
            <p className="hero__nota">{HERO.notaCta}</p>
            <a className="hero__ancora" href="#oferta">
              {HERO.ancora}
              <Icone nome="seta" tamanho={14} className="hero__ancora-seta" />
            </a>
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
          <p className="hero__legenda-visual">
            A grade de constância do ebook, a peça que mostra a sua execução dia a dia. Vem pronta para imprimir por{' '}
            <strong>{OFERTA.preco}</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
