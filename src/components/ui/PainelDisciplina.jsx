import './PainelDisciplina.css'
import { useEffect, useState } from 'react'
import Icone from './Icone'

/**
 * ELEMENTO ASSINATURA DA PAGINA: a grade de constancia.
 *
 * Em vez de um mockup generico de curso, o produto aparece como aquilo
 * que ele produz: 35 dias de execucao acendendo um a um. Os quadrados
 * roxos sao dias cumpridos, o verde e o dia de revisao da semana e os
 * vazios sao o que ainda depende de voce.
 */

const TOTAL_DIAS = 35
const DIAS_FALHOS = [4, 12, 25] // a grade mostra falhas de proposito: constancia real nao e perfeita
const DIAS_REVISAO = [6, 13, 20, 27]
const DIAS_CUMPRIDOS = 29

export default function PainelDisciplina() {
  const [ativo, setAtivo] = useState(false)
  const [sequencia, setSequencia] = useState(0)

  // Acende a grade e conta a sequencia logo apos a montagem.
  useEffect(() => {
    const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (semMovimento) {
      setAtivo(true)
      setSequencia(DIAS_CUMPRIDOS)
      return
    }

    const inicio = setTimeout(() => setAtivo(true), 260)
    const contador = setInterval(() => {
      setSequencia((atual) => {
        if (atual >= DIAS_CUMPRIDOS) {
          clearInterval(contador)
          return atual
        }
        return atual + 1
      })
    }, 55)

    return () => {
      clearTimeout(inicio)
      clearInterval(contador)
    }
  }, [])

  const dias = Array.from({ length: TOTAL_DIAS }, (_, i) => i)

  return (
    <figure className="painel" aria-label="Painel de constância do método, com 35 dias de execução">
      <div className="painel__moldura">
        <header className="painel__topo">
          <div>
            <p className="painel__etiqueta">Grade de constância</p>
            {/* Texto do mockup, nao titulo de conteudo: mantem a hierarquia h1 -> h2 intacta */}
            <p className="painel__titulo">Ciclo de 35 dias</p>
          </div>
          <span className="painel__selo">
            <span className="painel__ponto" aria-hidden="true" />
            em execução
          </span>
        </header>

        <div className={`painel__grade ${ativo ? 'is-ativa' : ''}`} aria-hidden="true">
          {dias.map((dia) => {
            const falhou = DIAS_FALHOS.includes(dia)
            const revisao = DIAS_REVISAO.includes(dia)
            const classe = falhou ? 'is-falha' : revisao ? 'is-revisao' : 'is-feito'
            return (
              <span
                key={dia}
                className={`painel__dia ${classe}`}
                style={{ animationDelay: `${dia * 42}ms` }}
              />
            )
          })}
        </div>

        <div className="painel__legenda" aria-hidden="true">
          <span className="painel__chave painel__chave--feito">dia cumprido</span>
          <span className="painel__chave painel__chave--revisao">revisão da semana</span>
          <span className="painel__chave painel__chave--vazio">dia perdido</span>
        </div>

        <div className="painel__metricas">
          <div className="painel__metrica">
            <span className="painel__numero">{sequencia}</span>
            <span className="painel__rotulo">dias cumpridos</span>
          </div>
          <div className="painel__metrica">
            <span className="painel__numero painel__numero--apoio">20</span>
            <span className="painel__rotulo">min por bloco</span>
          </div>
          <div className="painel__metrica">
            <span className="painel__numero">1</span>
            <span className="painel__rotulo">projeto no ar</span>
          </div>
        </div>

        <div className="painel__tarefa">
          <span className="painel__check">
            <Icone nome="check" tamanho={14} />
          </span>
          <span>
            <strong>Tarefa de hoje</strong>
            <br />
            Publicar a primeira versão e anotar o resultado.
          </span>
        </div>
      </div>

      <figcaption className="sr-only">
        Representação do painel de acompanhamento entregue com o método.
      </figcaption>
    </figure>
  )
}
