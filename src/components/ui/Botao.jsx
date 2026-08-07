import './Botao.css'
import Icone from './Icone'
import { rastrear, rastrearCheckout } from '../../lib/analytics'
import { LINKS } from '../../data/content'

/**
 * Botao de acao da pagina.
 *
 * variante: 'compra' -> roxo da marca, acao principal
 *           'linha'  -> link discreto com contorno
 * destino:  'checkout' (completo) | 'inicial' (R$ 10) | 'planos' (rola ate a tabela)
 * origem:   nome da secao, usado no rastreamento de eventos
 *
 * O checkout abre na mesma aba de proposito: aba nova depende de
 * pop-up liberado e some atras da janela em parte dos navegadores.
 */
export default function Botao({
  children,
  variante = 'compra',
  destino = 'checkout',
  origem = 'pagina',
  tamanho = 'md',
  pulsando = false,
  bloco = false,
  seta = false,
  className = '',
}) {
  const destinos = {
    inicial: LINKS.checkoutInicial,
    checkout: LINKS.checkout,
    planos: '#planos',
  }
  const href = destinos[destino] ?? LINKS.checkout
  const interno = destino === 'planos'

  const aoClicar = () => {
    if (interno) rastrear('ViewContent', { content_name: 'Tabela de valores', origem })
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
    <a className={classes} href={href} onClick={aoClicar}>
      <span className="botao__brilho" aria-hidden="true" />
      <span className="botao__texto">{children}</span>
      {seta && <Icone nome="seta" tamanho={17} className="botao__seta" />}
    </a>
  )
}
