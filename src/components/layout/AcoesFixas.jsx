import './AcoesFixas.css'
import { useEffect, useState } from 'react'
import Botao from '../ui/Botao'

/**
 * Barra inferior que aparece depois do hero no celular, com o atalho
 * para a tabela de valores. No desktop ela nao aparece: o cabecalho
 * fixo ja cumpre esse papel.
 */
export default function AcoesFixas() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > window.innerHeight * 0.75)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <div className={`barra-fixa ${visivel ? 'is-visivel' : ''}`}>
      <Botao variante="compra" destino="planos" origem="barra-fixa" className="barra-fixa__principal">
        VER VALORES
      </Botao>
    </div>
  )
}
