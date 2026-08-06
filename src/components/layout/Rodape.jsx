import './Rodape.css'
import { LINKS, MARCA } from '../../data/content'

/*
  Os links de Política de Privacidade e Termos de Uso apontam para páginas
  próprias. Publique os dois documentos e troque os href abaixo pelos
  endereços finais (ex.: /politica-de-privacidade).
*/

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="container rodape__interno">
        <div className="rodape__marca">
          <span className="rodape__sigla" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <div>
            <p className="rodape__nome">{MARCA.nome}</p>
            <p className="rodape__frase">Rotina de execução para quem quer construir renda extra com consistência.</p>
          </div>
        </div>

        <nav className="rodape__links" aria-label="Links institucionais">
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="/termos-de-uso">Termos de Uso</a>
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
            Contato
          </a>
        </nav>

        <div className="rodape__contato">
          <a href={`mailto:${MARCA.email}`}>{MARCA.email}</a>
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp {MARCA.whatsappVisivel}
          </a>
        </div>

        <p className="rodape__aviso">
          Este é um produto digital de educação. O material não garante resultado financeiro, valor ou prazo: o que
          você alcança depende da sua aplicação e do seu contexto. Esta página não é afiliada ao Facebook, à Meta ou ao
          Google.
        </p>

        <p className="rodape__copy">
          © {MARCA.ano} {MARCA.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
