import './Conteudo.css'
import Icone from '../ui/Icone'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { ENTREGAVEIS } from '../../data/content'

/**
 * O que vem dentro do PDF.
 *
 * Lista, nao grade de cards: esta secao fica entre o mecanismo e o
 * preco, e seis cards altos empurravam a oferta uma tela inteira para
 * baixo no celular. Sem botao proprio, porque a secao emenda na oferta.
 */
export default function Conteudo() {
  return (
    <section className="secao conteudo" id="conteudo">
      <div className="container container--estreito">
        <TituloSecao
          eyebrow="O que você recebe"
          titulo="Seis coisas dentro de um arquivo só"
          apoio="Nada de bônus inventado para inflar a lista."
        />

        <ul className="conteudo__lista">
          {ENTREGAVEIS.map((item, i) => (
            <Reveal key={item.titulo} as="li" className="entrega" atraso={i * 55}>
              <span className="entrega__check" aria-hidden="true">
                <Icone nome="check" tamanho={13} />
              </span>
              <div className="entrega__corpo">
                {/* A etiqueta de categoria saiu daqui: no celular ela quebrava
                    o titulo em duas linhas e engordava a lista inteira. */}
                <h3 className="entrega__titulo">{item.titulo}</h3>
                <p className="entrega__texto">{item.texto}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal as="p" className="conteudo__ponte">
          Agora a parte que você desceu a página para ver.
        </Reveal>
      </div>
    </section>
  )
}
