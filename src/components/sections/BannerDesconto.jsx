import './BannerDesconto.css'
import Botao from '../ui/Botao'
import Reveal from '../ui/Reveal'
import { BANNER } from '../../data/content'

export default function BannerDesconto() {
  return (
    <section className="banner-desconto" aria-labelledby="banner-titulo">
      <div className="container">
        <Reveal className="banner">
          <div className="banner__aura" aria-hidden="true" />

          <div className="banner__conteudo">
            <span className="banner__etiqueta">
              <span aria-hidden="true">🔥</span> Condição por tempo limitado
            </span>
            <h2 className="banner__titulo" id="banner-titulo">
              {BANNER.titulo}
            </h2>
            <p className="banner__texto">{BANNER.texto}</p>
          </div>

          <div className="banner__acao">
            <Botao variante="zap" destino="whatsapp" origem="banner-desconto" tamanho="lg" pulsando bloco>
              {BANNER.botao}
            </Botao>
            <span className="banner__apoio">Resposta no WhatsApp, sem compromisso</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
