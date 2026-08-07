import './Rodape.css'
import { MARCA } from '../../data/content'

/*
  As duas páginas legais são arquivos estáticos em public/, servidos junto
  com a build. Falta preencher nome, documento e foro dentro delas.
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
          <a href="/politica-de-privacidade.html">Política de Privacidade</a>
          <a href="/termos-de-uso.html">Termos de Uso</a>
          <a href={`mailto:${MARCA.email}`}>Contato</a>
        </nav>

        <div className="rodape__contato">
          <a href={`mailto:${MARCA.email}`}>{MARCA.email}</a>
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
