import './Planos.css'
import Botao from '../ui/Botao'
import Icone from '../ui/Icone'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { PLANOS } from '../../data/content'

export default function Planos() {
  return (
    <section className="secao planos" id="planos">
      <div className="container">
        <TituloSecao eyebrow={PLANOS.eyebrow} titulo={PLANOS.titulo} apoio={PLANOS.apoio} />

        <div className="planos__grade">
          {PLANOS.itens.map((plano, i) => (
            <Reveal
              key={plano.nome}
              as="article"
              className={`plano vidro ${plano.destaque ? 'plano--destaque' : ''}`}
              atraso={i * 90}
            >
              {plano.etiqueta && <span className="plano__etiqueta">{plano.etiqueta}</span>}

              <h3 className="plano__nome">{plano.nome}</h3>
              <p className="plano__resumo">{plano.resumo}</p>

              <p className="plano__preco">{plano.preco}</p>

              <ul className="plano__lista">
                {plano.inclui.map((item) => (
                  <li key={item}>
                    <span className="plano__check">
                      <Icone nome="check" tamanho={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Botao
                variante={plano.destaque ? 'compra' : 'linha'}
                destino={plano.destino}
                origem={`plano-${plano.nome.toLowerCase()}`}
                bloco
                className="plano__botao"
              >
                {plano.botao}
              </Botao>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
