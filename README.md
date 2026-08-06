# Disciplina que Dá Dinheiro — Landing Page

Landing page de alta conversão em React + CSS puro. Sem Bootstrap, sem Tailwind, sem biblioteca de ícones, de animação ou de UI. As únicas dependências são `react` e `react-dom`.

## Rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # gera a pasta dist/ para publicar
npm run preview  # revisa a build local
```

Para publicar (Vercel, Netlify, Hostinger, cPanel): rode `npm run build` e suba o conteúdo da pasta `dist/`.

## Identidade

Roxo `#8B5CF6` como cor dominante da marca (@doney.cash) e cor do botão de compra. Verde neon `#20F27B` fica reservado para WhatsApp, cupom e confirmações. As duas cores estão em `src/styles/tokens.css`, e os botões usam as variantes `compra` (roxo) e `zap` (verde).

## Estrutura

```
index.html                      SEO, Open Graph, Schema.org, fontes e espaço para Pixel/GA4
public/
  favicon.svg                   ícone (a própria grade de constância)
  og-image.png                  imagem 1200x630 do compartilhamento
  robots.txt / sitemap.xml      trocar o domínio antes de publicar
src/
  main.jsx                      ponto de entrada
  App.jsx                       ordem das seções da página
  data/content.js               TODA a copy da página fica aqui
  lib/analytics.js              disparo de eventos de Pixel e GA4
  hooks/useReveal.js            scroll reveal via IntersectionObserver
  styles/
    tokens.css                  cores, tipografia, espaço, sombras
    base.css                    reset, fundo, utilitários
    animations.css              todas as animações e reduced-motion
  components/
    ui/                         Botao, Reveal, TituloSecao, Icone, Estrelas, PainelDisciplina
    layout/                     Cabecalho, Rodape, AcoesFixas
    sections/                   Hero, BannerDesconto, Beneficios, Conteudo, ParaQuemE,
                                ParaQuemNaoE, ComoFunciona, Resultados, Depoimentos,
                                Garantia, Faq, CtaFinal
```

## O que trocar antes de publicar

1. **Domínio**: `index.html` (canonical, Open Graph, Twitter), `public/robots.txt` e `public/sitemap.xml` usam `https://seudominio.com.br`.
2. **Depoimentos**: os 6 relatos em `src/data/content.js` são ilustrativos e estão marcados como tal na página. Troque por relatos reais de alunos e, se tiver autorização de imagem, siga o comentário em `src/components/sections/Depoimentos.jsx` para usar fotos no lugar das iniciais.
3. **Contato**: `MARCA.email` em `src/data/content.js`.
4. **Política de Privacidade e Termos de Uso**: publique as duas páginas e ajuste os `href` em `src/components/layout/Rodape.jsx`.

## Pixel e Analytics

- Os scripts base entram no `index.html`, nos blocos comentados `META PIXEL` e `GOOGLE ANALYTICS 4` (e o `<noscript>` do Pixel logo depois do `<body>`).
- Os eventos já estão ligados: todo botão de compra dispara `InitiateCheckout` e todo botão de WhatsApp dispara `Contact`, com o parâmetro `origem` indicando a seção (`hero`, `banner-desconto`, `cta-final`, `barra-fixa`, etc.).
- Nada quebra se as tags não estiverem instaladas: `src/lib/analytics.js` só dispara quando `fbq`/`gtag` existem.

## Links usados

- Checkout: `https://pay.lowify.com.br/checkout?product_id=bGpm3F`
- WhatsApp: `https://wa.me/5565999684531`

Os dois ficam em `LINKS`, no topo de `src/data/content.js`. Trocar lá atualiza a página inteira.

## Medições da build atual

Lighthouse (mobile, build de produção servida localmente): Acessibilidade 100, Boas Práticas 100, SEO 100. LCP 618 ms e CLS 0,00 no trace de carregamento.
