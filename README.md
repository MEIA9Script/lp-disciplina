# Disciplina que Dá Dinheiro — Landing Page

Landing page de venda em React + CSS puro. Sem Bootstrap, sem Tailwind, sem biblioteca de ícones, de animação ou de UI. As únicas dependências são `react` e `react-dom`.

O produto é um **ebook em PDF**: 74 páginas na versão completa (R$ 34,90) e 45 na inicial (R$ 10,00). A página inteira fala nesses termos, sem "aulas", "módulos" ou "área de membros".

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
    ui/                         Botao, Reveal, TituloSecao, Icone, PainelDisciplina
    layout/                     Cabecalho, Rodape, AcoesFixas
    sections/                   Hero, Mecanismo, Conteudo, Oferta, ComoFunciona,
                                Publico, Resultados, Faq, Garantia, CtaFinal
```

## Ordem das seções e por quê

```
Hero          o que é, o que muda, o que vem junto, o preço e o botão
Mecanismo     as três peças do sistema, para separar isso de "ter motivação"
Conteudo      lista compacta do que chega no e-mail
OFERTA        preço, tudo o que está incluso, 7 dias de garantia e o botão
--------------------------------------------------------------------------
ComoFunciona  os três passos depois da compra
Publico       para quem é e para quem não é, lado a lado
Resultados    expectativa honesta, com o aviso de que nada é garantido
Faq           as dúvidas que travam a compra
Garantia      risco zero, com botão
CtaFinal      última chamada
```

A oferta fica na quarta seção de propósito. Tudo o que vem depois dela existe
para quebrar objeção de quem não comprou de primeira, e cada bloco pesado
termina perto de um botão. A barra fixa de compra aparece assim que o hero sai
da tela, no celular e no desktop, e leva direto ao checkout.

## O que a página não faz

Nada de depoimento inventado, número inflado, contador falso ou promessa de
ganho. Cada informação da página (74 páginas, 19 capítulos, plano de 30 dias,
oito serviços, quatro objeções) existe dentro do PDF em `~/ebook-disciplina`.
A seção de depoimentos saiu do ar porque os seis relatos eram ilustrativos;
o componente antigo está no histórico do git e volta quando houver relato real
com autorização.

## O que trocar antes de publicar

1. **Domínio**: `index.html` (canonical, Open Graph, Twitter), `public/robots.txt` e `public/sitemap.xml` usam `https://seudominio.com.br`.
2. **Garantia de 7 dias**: a página promete devolução em 7 dias pelo e-mail de contato, apoiada no artigo 49 do CDC. Confirme que a Lowify processa o estorno nesse prazo e que o e-mail de contato é acompanhado, porque a promessa está no ar em três lugares (oferta, FAQ e seção de garantia).
3. **Contato**: `MARCA.email` em `src/data/content.js`.
4. **Política de Privacidade e Termos de Uso**: publique as duas páginas e ajuste os `href` em `src/components/layout/Rodape.jsx`.

## Pixel e Analytics

- Os scripts base entram no `index.html`, nos blocos comentados `META PIXEL` e `GOOGLE ANALYTICS 4` (e o `<noscript>` do Pixel logo depois do `<body>`).
- Os eventos já estão ligados: todo botão de compra dispara `InitiateCheckout` com o parâmetro `origem` indicando a seção (`hero`, `oferta`, `oferta-inicial`, `garantia`, `faq`, `cta-final`, `barra-fixa`, `cabecalho`). O único link interno que rastreia é a âncora para a oferta, que dispara `ViewContent`.
- Nada quebra se as tags não estiverem instaladas: `src/lib/analytics.js` só dispara quando `fbq`/`gtag` existem.

## Links usados

- Checkout: `https://pay.lowify.com.br/checkout?product_id=bGpm3F`
- WhatsApp: `https://wa.me/5565999684531`

Os dois ficam em `LINKS`, no topo de `src/data/content.js`. Trocar lá atualiza a página inteira.

## Medições da build atual

Lighthouse (mobile, build de produção servida localmente): Acessibilidade 100, SEO 100, Boas Práticas 96 (os dois erros de console são o Pixel e a UTMify sem rede no ambiente local).

Rolagem até o preço, em uma tela de 390x844: a oferta começa em 3.990 px, contra 4.898 px na versão anterior. A página inteira encolheu de 14.330 px para 13.228 px mesmo com a seção de oferta ficando maior.
