import './Botao.css'
import { rastrearCheckout, rastrearWhatsapp } from '../../lib/analytics'
import { LINKS } from '../../data/content'

/**
 * Botao de acao da pagina.
 *
 * variante: 'compra' -> roxo da marca, acao principal
 *           'zap'    -> verde do WhatsApp, cupom
 *           'linha'  -> link discreto com contorno
 * destino:  'checkout' (completo) | 'inicial' (R$ 10) | 'whatsapp'
 * origem:   nome da secao, usado no rastreamento de eventos
 */
export default function Botao({
  children,
  variante = 'compra',
  destino = 'checkout',
  origem = 'pagina',
  tamanho = 'md',
  pulsando = false,
  bloco = false,
  className = '',
}) {
  const destinos = {
    whatsapp: LINKS.whatsapp,
    inicial: LINKS.checkoutInicial,
    checkout: LINKS.checkout,
  }
  const href = destinos[destino] ?? LINKS.checkout

  const aoClicar = () => {
    if (destino === 'whatsapp') rastrearWhatsapp(origem)
    else rastrearCheckout(origem)
  }

  const classes = [
    'botao',
    `botao--${variante}`,
    `botao--${tamanho}`,
    pulsando ? 'botao--pulsando' : '',
    bloco ? 'botao--bloco' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      className={classes}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={aoClicar}
    >
      <span className="botao__brilho" aria-hidden="true" />
      <span className="botao__texto">{children}</span>
      {destino === 'whatsapp' && (
        <svg className="botao__icone" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.9.5 3.66 1.4 5.2L2 22l5.1-1.55a9.8 9.8 0 0 0 4.94 1.31h.01c5.43 0 9.84-4.4 9.84-9.84S17.47 2 12.04 2Zm0 17.8h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.03.92.94-2.95-.2-.31a8.13 8.13 0 0 1-1.25-4.3c0-4.5 3.67-8.16 8.18-8.16 2.19 0 4.24.85 5.78 2.4a8.1 8.1 0 0 1 2.4 5.77c0 4.5-3.67 8.16-8.17 8.16Zm4.48-6.11c-.24-.12-1.45-.72-1.67-.8-.23-.08-.39-.12-.56.12-.16.25-.63.8-.78.97-.14.16-.28.18-.52.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.3-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.52.6.19 1.14.16 1.56.1.48-.07 1.45-.59 1.66-1.17.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"
          />
        </svg>
      )}
    </a>
  )
}
