import './AcoesFixas.css'
import { useEffect, useState } from 'react'
import Botao from '../ui/Botao'
import Icone from '../ui/Icone'
import { LINKS } from '../../data/content'
import { rastrearWhatsapp } from '../../lib/analytics'

/**
 * Acoes que acompanham a rolagem, liberadas depois do hero:
 * no celular, uma barra inferior com a compra em primeiro plano;
 * no desktop, um botao flutuante de WhatsApp.
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
    <>
      <div className={`barra-fixa ${visivel ? 'is-visivel' : ''}`}>
        <Botao variante="compra" origem="barra-fixa" className="barra-fixa__principal">
          QUERO ACESSAR AGORA
        </Botao>
        <a
          className="barra-fixa__whats"
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir cupom de desconto no WhatsApp"
          onClick={() => rastrearWhatsapp('barra-fixa')}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.9.5 3.66 1.4 5.2L2 22l5.1-1.55a9.8 9.8 0 0 0 4.94 1.31h.01c5.43 0 9.84-4.4 9.84-9.84S17.47 2 12.04 2Zm4.48 13.69c-.24-.12-1.45-.72-1.67-.8-.23-.08-.39-.12-.56.12-.16.25-.63.8-.78.97-.14.16-.28.18-.52.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.3-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.52.6.19 1.14.16 1.56.1.48-.07 1.45-.59 1.66-1.17.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"
            />
          </svg>
        </a>
      </div>

      <a
        className={`whats-flutuante ${visivel ? 'is-visivel' : ''}`}
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => rastrearWhatsapp('flutuante')}
      >
        <span className="whats-flutuante__icone" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="21" height="21" focusable="false">
            <path
              fill="currentColor"
              d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.9.5 3.66 1.4 5.2L2 22l5.1-1.55a9.8 9.8 0 0 0 4.94 1.31h.01c5.43 0 9.84-4.4 9.84-9.84S17.47 2 12.04 2Zm4.48 13.69c-.24-.12-1.45-.72-1.67-.8-.23-.08-.39-.12-.56.12-.16.25-.63.8-.78.97-.14.16-.28.18-.52.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.3-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.52.6.19 1.14.16 1.56.1.48-.07 1.45-.59 1.66-1.17.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"
            />
          </svg>
        </span>
        <span className="whats-flutuante__texto">
          Pedir meu cupom
          <Icone nome="seta" tamanho={14} />
        </span>
      </a>
    </>
  )
}
