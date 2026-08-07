import './Cabecalho.css'
import { useEffect, useState } from 'react'
import Botao from '../ui/Botao'
import { MARCA } from '../../data/content'

const NAVEGACAO = [
  { id: 'beneficios', rotulo: 'Benefícios' },
  { id: 'conteudo', rotulo: 'O que você recebe' },
  { id: 'planos', rotulo: 'Preços' },
  { id: 'como-funciona', rotulo: 'Como funciona' },
  { id: 'faq', rotulo: 'Dúvidas' },
]

export default function Cabecalho() {
  const [encolhido, setEncolhido] = useState(false)

  useEffect(() => {
    const aoRolar = () => setEncolhido(window.scrollY > 24)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <header className={`cabecalho ${encolhido ? 'is-encolhido' : ''}`}>
      <div className="container cabecalho__interno">
        <a className="cabecalho__marca" href="#topo" aria-label={`${MARCA.nome}, ir para o topo`}>
          <span className="cabecalho__sigla" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="cabecalho__nome">
            Disciplina <em>que dá dinheiro</em>
          </span>
        </a>

        <nav className="cabecalho__nav" aria-label="Seções da página">
          {NAVEGACAO.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="cabecalho__link">
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className="cabecalho__acao">
          <Botao variante="compra" destino="planos" tamanho="sm" origem="cabecalho">
            COMEÇAR AGORA
          </Botao>
        </div>
      </div>
    </header>
  )
}
