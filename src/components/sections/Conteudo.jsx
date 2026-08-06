import './Conteudo.css'
import Botao from '../ui/Botao'
import Icone from '../ui/Icone'
import Reveal from '../ui/Reveal'
import TituloSecao from '../ui/TituloSecao'
import { ENTREGAVEIS } from '../../data/content'

export default function Conteudo() {
  return (
    <section className="secao conteudo" id="conteudo">
      <div className="container">
        <TituloSecao
          eyebrow="O que você vai receber"
          titulo="Tudo que entra no acesso"
          apoio="Material, ferramentas e apoio de execução. Nada aqui é bônus enfeitado para inflar a lista."
        />

        <div className="conteudo__grade">
          {ENTREGAVEIS.map((item, i) => (
            <Reveal key={item.titulo} as="article" className="entrega vidro" atraso={i * 65}>
              <div className="entrega__topo">
                <span className="entrega__etiqueta">{item.etiqueta}</span>
                <Icone nome="mais" tamanho={16} className="entrega__mais" />
              </div>
              <h3 className="entrega__titulo">{item.titulo}</h3>
              <p className="entrega__texto">{item.texto}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="conteudo__rodape">
          <p className="conteudo__frase">Acesso liberado por e-mail assim que o pagamento é aprovado.</p>
          <Botao variante="compra" origem="conteudo">
            QUERO ACESSAR AGORA
          </Botao>
        </Reveal>
      </div>
    </section>
  )
}
