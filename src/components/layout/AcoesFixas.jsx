import './AcoesFixas.css'
import { useEffect, useState } from 'react'
import Botao from '../ui/Botao'
import { OFERTA } from '../../data/content'

/**
 * Barra inferior que aparece assim que o hero sai da tela.
 *
 * Agora ela leva direto ao checkout, com o preco visivel: para um
 * produto de R$ 34,90 nao faz sentido gastar um clique mandando a
 * pessoa de volta para a tabela. No desktop ela tambem aparece,
 * porque o CTA do cabecalho e pequeno demais para carregar a decisao.
 */
export default function AcoesFixas() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > window.innerHeight * 0.85)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <div className={`barra-fixa ${visivel ? 'is-visivel' : ''}`}>
      <div className="barra-fixa__info">
        <span className="barra-fixa__preco">{OFERTA.preco}</span>
        <span className="barra-fixa__apoio">pagamento único · 7 dias de garantia</span>
      </div>
      <Botao variante="compra" origem="barra-fixa" className="barra-fixa__principal" seta>
        COMPRAR
      </Botao>
    </div>
  )
}
