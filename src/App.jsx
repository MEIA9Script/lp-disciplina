import Cabecalho from './components/layout/Cabecalho'
import Rodape from './components/layout/Rodape'
import AcoesFixas from './components/layout/AcoesFixas'

import Hero from './components/sections/Hero'
import Mecanismo from './components/sections/Mecanismo'
import Conteudo from './components/sections/Conteudo'
import Oferta from './components/sections/Oferta'
import ComoFunciona from './components/sections/ComoFunciona'
import Publico from './components/sections/Publico'
import Resultados from './components/sections/Resultados'
import Faq from './components/sections/Faq'
import Garantia from './components/sections/Garantia'
import CtaFinal from './components/sections/CtaFinal'

/**
 * Ordem da pagina, pensada para trafego frio de baixo ticket.
 *
 *   1. Hero        o que e, para que serve, o que vem junto, quanto custa
 *   2. Mecanismo   por que isso nao e "ter motivacao", em tres pecas
 *   3. Conteudo    o que chega no e-mail
 *   4. OFERTA      preco, o que esta incluso, garantia e botao
 *   5. Como funciona, publico, resultados, FAQ e garantia: quebra de
 *      objecao para quem nao comprou de primeira
 *   6. CTA final
 *
 * A oferta aparece na terceira rolagem, nao no fim. Todas as secoes
 * depois dela existem para derrubar objecao, e cada bloco pesado
 * termina perto de um botao.
 *
 * Depoimentos: a secao saiu da pagina. Os seis relatos que existiam
 * eram ilustrativos e estavam no ar como se fossem reais. Quando
 * houver depoimento de aluno com autorizacao, o componente antigo
 * volta do historico do git (`git show HEAD:src/components/sections/
 * Depoimentos.jsx`) e entra depois de <Resultados />.
 */
export default function App() {
  return (
    <>
      <a className="pular-para-conteudo" href="#conteudo-principal">
        Pular para o conteúdo
      </a>

      <Cabecalho />

      <main id="conteudo-principal">
        <Hero />
        <Mecanismo />
        <Conteudo />
        <Oferta />
        <ComoFunciona />
        <Publico />
        <Resultados />
        <Faq />
        <Garantia />
        <CtaFinal />
      </main>

      <Rodape />
      <AcoesFixas />
    </>
  )
}
