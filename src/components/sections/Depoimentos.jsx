import './Depoimentos.css'
import Estrelas from '../ui/Estrelas'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { AVISO_DEPOIMENTOS, DEPOIMENTOS } from '../../data/content'

/*
  Avatar: por enquanto usa as iniciais da pessoa, sem foto de banco de imagem
  fingindo ser aluno real. Para trocar por uma foto autorizada, adicione o campo
  `foto` no depoimento em src/data/content.js e substitua o bloco abaixo por:

    <img className="depoimento__avatar" src={item.foto} alt={item.nome}
         width="46" height="46" loading="lazy" decoding="async" />
*/

export default function Depoimentos() {
  return (
    <section className="secao depoimentos" id="depoimentos">
      <div className="container">
        <TituloSecao
          eyebrow="Depoimentos"
          titulo="Quem aplicou, conta o que mudou"
          apoio="Relatos de pessoas que usaram o método na rotina real, com trabalho, casa e cansaço no meio do caminho."
        />

        <div className="depoimentos__grade">
          {DEPOIMENTOS.map((item, i) => (
            <Reveal key={item.nome} as="figure" className="depoimento vidro" atraso={i * 70}>
              <span className="depoimento__aspas" aria-hidden="true">
                ”
              </span>
              <Estrelas nota={item.nota} />
              <blockquote className="depoimento__texto">{item.texto}</blockquote>
              <figcaption className="depoimento__pessoa">
                <span className="depoimento__avatar" aria-hidden="true">
                  {item.iniciais}
                </span>
                <span>
                  <strong className="depoimento__nome">{item.nome}</strong>
                  <span className="depoimento__contexto">{item.contexto}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <p className="depoimentos__dica">Deslize para o lado para ver os outros</p>

        <Reveal as="p" className="depoimentos__aviso">
          {AVISO_DEPOIMENTOS}
        </Reveal>
      </div>
    </section>
  )
}
