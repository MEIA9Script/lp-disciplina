import Cabecalho from './components/layout/Cabecalho'
import Rodape from './components/layout/Rodape'
import AcoesFixas from './components/layout/AcoesFixas'

import Hero from './components/sections/Hero'
import BannerDesconto from './components/sections/BannerDesconto'
import Beneficios from './components/sections/Beneficios'
import Conteudo from './components/sections/Conteudo'
import ParaQuemE from './components/sections/ParaQuemE'
import ParaQuemNaoE from './components/sections/ParaQuemNaoE'
import ComoFunciona from './components/sections/ComoFunciona'
import Resultados from './components/sections/Resultados'
import Depoimentos from './components/sections/Depoimentos'
import Garantia from './components/sections/Garantia'
import Faq from './components/sections/Faq'
import CtaFinal from './components/sections/CtaFinal'

/**
 * Ordem da pagina: promessa, oferta de cupom, prova de metodo,
 * qualificacao do publico, execucao, prova social, seguranca e fechamento.
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
        <BannerDesconto />
        <Beneficios />
        <Conteudo />
        <ParaQuemE />
        <ParaQuemNaoE />
        <ComoFunciona />
        <Resultados />
        <Depoimentos />
        <Garantia />
        <Faq />
        <CtaFinal />
      </main>

      <Rodape />
      <AcoesFixas />
    </>
  )
}
