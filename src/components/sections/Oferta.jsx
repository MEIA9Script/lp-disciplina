import './Oferta.css'
import Botao from '../ui/Botao'
import Icone from '../ui/Icone'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { AVISO_OFERTA, OFERTA } from '../../data/content'

/**
 * OFERTA.
 *
 * Fica logo depois do mecanismo e da lista de entregaveis, e nao no
 * fim da pagina. Substitui os dois cards de plano lado a lado: agora
 * existe uma oferta principal (o completo) e uma alternativa discreta
 * (o inicial de R$ 10), porque dois cards de mesmo peso dividem a
 * decisao e derrubam a conversao de trafego frio.
 *
 * O id "planos" continua aqui como ancora antiga: links salvos e
 * anuncios que apontam para #planos nao podem quebrar.
 */
export default function Oferta() {
  return (
    <section className="secao oferta" id="oferta">
      <span id="planos" className="oferta__ancora-antiga" aria-hidden="true" />

      <div className="container">
        <TituloSecao eyebrow={OFERTA.eyebrow} titulo={OFERTA.titulo} apoio={OFERTA.apoio} />

        <Reveal className="oferta__bloco">
          <div className="oferta__aura" aria-hidden="true" />

          {/* Coluna 1: tudo o que entra no pacote */}
          <div className="oferta__lista-lado">
            <p className="oferta__lista-titulo">Está tudo incluso</p>
            <ul className="oferta__lista">
              {OFERTA.inclui.map((item) => (
                <li key={item}>
                  <span className="oferta__check" aria-hidden="true">
                    <Icone nome="check" tamanho={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2: preco e acao */}
          <div className="oferta__caixa">
            <p className="oferta__preco-rotulo">{OFERTA.precoRotulo}</p>
            <p className="oferta__preco">{OFERTA.preco}</p>
            <p className="oferta__preco-apoio">{OFERTA.precoApoio}</p>

            <Botao variante="compra" tamanho="lg" origem="oferta" bloco pulsando seta>
              {OFERTA.botao}
            </Botao>

            <p className="oferta__microcopy">{OFERTA.microcopy}</p>

            <ul className="oferta__formas">
              {OFERTA.formas.map((forma) => (
                <li key={forma}>
                  <Icone nome="check" tamanho={12} />
                  {forma}
                </li>
              ))}
            </ul>

            <p className="oferta__comparacao">{OFERTA.comparacao}</p>
          </div>
        </Reveal>

        {/* Reducao de risco logo abaixo do botao, nao no fim da pagina */}
        <Reveal className="oferta__risco" atraso={80}>
          <span className="oferta__risco-selo" aria-hidden="true">
            <Icone nome="escudo" tamanho={22} />
          </span>
          <div>
            <strong className="oferta__risco-titulo">{OFERTA.risco.titulo}</strong>
            <p className="oferta__risco-texto">{OFERTA.risco.texto}</p>
          </div>
        </Reveal>

        {/* Alternativa de entrada, de proposito com menos peso visual */}
        <Reveal className="oferta__alternativa" atraso={120}>
          <div className="oferta__alternativa-texto">
            <p className="oferta__alternativa-etiqueta">{OFERTA.alternativa.etiqueta}</p>
            <p className="oferta__alternativa-nome">
              {OFERTA.alternativa.nome} <span>{OFERTA.alternativa.preco}</span>
            </p>
            <p className="oferta__alternativa-descricao">{OFERTA.alternativa.texto}</p>
          </div>
          <Botao variante="linha" destino="inicial" origem="oferta-inicial" className="oferta__alternativa-botao">
            {OFERTA.alternativa.botao}
          </Botao>
        </Reveal>

        <Reveal as="p" className="oferta__aviso" atraso={140}>
          {AVISO_OFERTA}
        </Reveal>
      </div>
    </section>
  )
}
