/* =========================================================
   CONTEUDO DA PAGINA
   Toda a copy fica aqui. Para ajustar textos, edite este arquivo
   e nao os componentes.

   Regra da pagina: nada de numero inventado, nada de promessa de
   ganho e nada de prova social que nao exista. Tudo o que esta
   descrito abaixo esta dentro do PDF que o comprador recebe.
   ========================================================= */

export const LINKS = {
  checkout: 'https://pay.lowify.com.br/checkout?product_id=bGpm3F',
  checkoutInicial: 'https://pay.lowify.com.br/checkout?product_id=1FmEMW',
}

/* Valores exibidos na pagina. Trocar aqui atualiza hero, oferta e FAQ. */
export const PRECOS = {
  completo: 'R$ 34,90',
  inicial: 'R$ 10,00',
}

export const MARCA = {
  nome: 'Disciplina que Dá Dinheiro',
  nomeCurto: 'Disciplina',
  email: 'iuri.dahora.5@gmail.com',
  ano: new Date().getFullYear(),
}

/* ----------------------------- HERO -----------------------------
   Primeira dobra: o que e o produto, o que muda, o que vem dentro,
   quanto custa e o botao. Tudo isso antes de qualquer rolagem.
   ---------------------------------------------------------------- */
export const HERO = {
  eyebrow: 'Ebook em PDF · 74 páginas',
  // A headline e quebrada em tres partes: base, destaque e a palavra sublinhada.
  titulo: ['Você já sabe o que fazer.', 'O problema é', 'fazer todo dia.'],
  subtitulo:
    'Um ebook com duas coisas dentro: o sistema que faz você executar mesmo nos dias ruins e o passo a passo para vender um serviço digital para negócio pequeno.',
  entregaTitulo: 'O que você recebe hoje',
  entrega: [
    'Ebook completo em PDF, 74 páginas',
    'Plano de 30 dias com a tarefa de cada dia',
    'Grade de constância para imprimir',
    'Scripts de abordagem e modelo de proposta',
  ],
  cta: 'QUERO O EBOOK · R$ 34,90',
  notaCta: 'Pagamento único no Pix ou no cartão. O PDF chega no seu e-mail em poucos minutos.',
  ancora: 'Ver tudo que vem dentro',
  selos: ['Acesso imediato', 'Pix ou cartão', '7 dias de garantia'],
}

/* ---------------------------- MECANISMO ----------------------------
   A explicacao curta de por que isso nao e "ter motivacao".
   Tres pecas, nao seis: o visitante precisa entender rapido e descer
   para a oferta.
   ------------------------------------------------------------------- */
export const MECANISMO = {
  eyebrow: 'Como funciona por dentro',
  titulo: 'Não é motivação. É um sistema de três peças.',
  apoio:
    'Motivação dura três dias. O que sustenta trinta são três peças de rotina, e o ebook monta as três com você.',
  pecas: [
    {
      icone: 'relogio',
      numero: '01',
      titulo: 'O bloco de execução',
      texto:
        'De 20 a 45 minutos por dia, no mesmo horário, com uma tarefa só, escolhida antes de começar. Existe a versão mínima de cinco minutos para o dia em que tudo deu errado. Dia fraco conta, dia zerado não.',
    },
    {
      icone: 'grade',
      numero: '02',
      titulo: 'A grade de constância',
      texto:
        '35 quadrados, um por dia. Você pinta o dia cumprido e deixa o dia perdido vazio, sem apagar. A regra é uma: nunca dois vazios seguidos. Ver a sequência na parede cobra mais que qualquer alarme no celular.',
    },
    {
      icone: 'escudo',
      numero: '03',
      titulo: 'O protocolo de recaída',
      texto:
        'Você vai falhar, isso é estatística. O protocolo diz o que fazer nas 24 horas seguintes: não recomeçar do zero, escrever a causa em uma linha, mudar uma variável só e executar hoje, nem que sejam cinco minutos.',
    },
  ],
  fecho:
    'Com o sistema de pé, a segunda metade do ebook aponta ele para uma coisa concreta: escolher um serviço, montar a lista de clientes, abordar, cobrar e enviar proposta.',
}

/* ----------------------- O QUE VOCÊ VAI RECEBER -----------------------
   Lista compacta de proposito: essa secao fica entre o mecanismo e o
   preco, e cada card grande aqui empurrava a oferta uma tela para
   baixo no celular. A descricao longa de cada item vive no ebook,
   nao na landing.
   ---------------------------------------------------------------------- */
export const ENTREGAVEIS = [
  {
    etiqueta: 'Núcleo',
    titulo: 'Ebook completo em PDF, 74 páginas',
    texto: 'Dezenove capítulos, do ciclo da procrastinação até a proposta enviada.',
  },
  {
    etiqueta: 'Prática',
    titulo: 'Plano de 30 dias, dia a dia',
    texto: 'Uma tarefa escrita para cada dia, dividida em quatro semanas com objetivo próprio.',
  },
  {
    etiqueta: 'Ferramenta',
    titulo: 'Grade de constância de 35 dias',
    texto: 'A folha para imprimir e colar na parede, com a legenda e a regra das duas falhas.',
  },
  {
    etiqueta: 'Escolha',
    titulo: 'Oito serviços com faixa de preço',
    texto: 'Cada um com o tempo médio para aprender e o valor praticado no mercado.',
  },
  {
    etiqueta: 'Vendas',
    titulo: 'Scripts de abordagem e retomada',
    texto: 'Mensagem de WhatsApp, de direct e as duas retomadas, prontas para adaptar.',
  },
  {
    etiqueta: 'Fechamento',
    titulo: 'Proposta, preço e objeções',
    texto: 'O modelo de proposta em seis blocos, as três formas de precificar e as quatro objeções.',
  },
]

/* ------------------------------ OFERTA ------------------------------
   Aparece logo depois do mecanismo e da lista de entregaveis.
   Um preco em destaque, o inicial como alternativa discreta.
   -------------------------------------------------------------------- */
export const OFERTA = {
  eyebrow: 'A oferta',
  titulo: 'Tudo isso por R$ 34,90, uma vez só',
  apoio:
    'Sem assinatura, sem mensalidade e sem plano anual. Você paga uma vez, baixa o PDF e o arquivo fica com você.',
  inclui: [
    'Ebook completo em PDF, 74 páginas, 19 capítulos',
    'Plano de 30 dias com a tarefa de cada dia',
    'Grade de constância de 35 dias para imprimir',
    'Bloco de execução e protocolo de recaída',
    'Oito serviços com faixa de preço de mercado',
    'Scripts de abordagem, retomadas e lista de clientes',
    'Modelo de proposta, precificação e as quatro objeções',
    'Os quatro números da revisão semanal',
  ],
  precoRotulo: 'Você paga hoje',
  preco: 'R$ 34,90',
  precoApoio: 'pagamento único, no Pix ou no cartão',
  comparacao: 'Custa menos que um lanche com refrigerante. A diferença é que o lanche acaba em dez minutos.',
  botao: 'QUERO O EBOOK COMPLETO',
  microcopy: 'Pagamento em ambiente seguro da plataforma. O PDF chega no seu e-mail em poucos minutos.',
  formas: ['Pix', 'Cartão', 'Acesso imediato'],
  risco: {
    titulo: '7 dias de garantia',
    texto:
      'Baixou, leu e concluiu que não é para você? Peça o reembolso em até 7 dias pelo e-mail de contato e o valor volta. É o seu direito pelo Código de Defesa do Consumidor, e aqui ele é cumprido sem discussão.',
  },
  alternativa: {
    etiqueta: 'Prefere começar mais leve?',
    nome: 'Material inicial',
    preco: 'R$ 10,00',
    texto:
      'A base em 45 páginas: por que você trava, o que é disciplina na prática, os exercícios de repetição, as habilidades que o mercado paga e o desafio de 7 dias. Não tem a parte de serviço, preço, scripts e plano de 30 dias.',
    botao: 'COMEÇAR PELO INICIAL, R$ 10',
  },
}

/* --------------------------- COMO FUNCIONA --------------------------- */
export const PASSOS = [
  {
    numero: '01',
    titulo: 'Você compra pelo checkout',
    texto: 'Pagamento em ambiente seguro da plataforma, no Pix ou no cartão. Leva menos de dois minutos.',
  },
  {
    numero: '02',
    titulo: 'O PDF chega no e-mail',
    texto: 'Assim que o pagamento é aprovado, o arquivo vai para o e-mail cadastrado na compra. Baixou, é seu.',
  },
  {
    numero: '03',
    titulo: 'Você começa o dia 1 hoje',
    texto: 'A primeira tarefa do plano é montar o bloco e a grade. Dá para fazer hoje à noite, sem esperar segunda.',
  },
]

/* ---------------------------- PARA QUEM É ---------------------------- */
export const PUBLICO = {
  eyebrow: 'Antes de comprar',
  titulo: 'Vale a pena para você?',
  apoio: 'Prefiro perder a venda agora a ter alguém frustrado depois. Leia as duas colunas antes de decidir.',
  sim: [
    'Quer começar a gerar renda extra pela internet e não sabe por onde começar',
    'Já tentou antes, empolgou nos primeiros dias e parou na terceira semana',
    'Tem pouco tempo livre e precisa de uma rotina que caiba na vida real',
    'Consome muito conteúdo, salva tudo e executa pouco',
    'Quer um caminho definido em vez de mais uma lista de dicas soltas',
    'Aceita executar todos os dias, mesmo que em blocos curtos',
  ],
  nao: [
    'Procura enriquecer rápido ou ganhar dinheiro sem trabalhar',
    'Quer um método automático que rode sozinho enquanto você dorme',
    'Não pretende reservar nem alguns minutos por dia para executar',
    'Espera garantia de valor ou de prazo para o primeiro resultado',
    'Compra material para colecionar e nunca abre o arquivo',
    'Não aceita mudar nada na própria rotina',
  ],
}

/* ------------------------ RESULTADOS ESPERADOS ------------------------ */
export const RESULTADOS = [
  {
    titulo: 'Uma rotina que você consegue manter',
    texto: 'Um bloco de execução fixo na semana, com tarefa definida e sem depender de estar motivado.',
  },
  {
    titulo: 'Clareza sobre o próximo passo',
    texto: 'Você abre o dia sabendo o que fazer, em vez de gastar a energia decidindo por onde começar.',
  },
  {
    titulo: 'Um serviço escolhido e ofertado',
    texto: 'Sair da ideia solta e ter um serviço definido, uma lista de negócios e mensagens enviadas de verdade.',
  },
  {
    titulo: 'Menos abandono no meio',
    texto: 'Um protocolo para atravessar a fase em que quase todo mundo desiste e voltar rápido depois de uma falha.',
  },
]

/* Versao curta, exibida na letra miuda da oferta */
export const AVISO_OFERTA =
  'Produto digital de educação. Não existe garantia de ganho financeiro, de valor ou de prazo: o resultado depende da aplicação de cada pessoa.'

export const AVISO_RESULTADOS =
  'Os itens acima descrevem o que o material se propõe a construir. Não existe garantia de ganho financeiro, de valor ou de prazo: o resultado depende da aplicação individual, do tempo dedicado e do contexto de cada pessoa.'

/* ---------------------------- DEPOIMENTOS ----------------------------
   A secao esta FORA da pagina de proposito (veja src/App.jsx).
   Os relatos abaixo sao ilustrativos e nao podem ir ao ar como se
   fossem reais. Quando existirem depoimentos de verdade, com
   autorizacao, substitua a lista e volte a secao no App.
   ---------------------------------------------------------------------- */
export const DEPOIMENTOS = []

/* ----------------------------- GARANTIA ----------------------------- */
export const GARANTIA = {
  eyebrow: 'Risco zero',
  titulo: 'O risco é meu, não seu',
  texto:
    'Você tem 7 dias para ler o material inteiro e decidir. Se concluir que não serve para o seu caso, escreve para o e-mail de contato e o valor volta, sem questionário e sem enrolação.',
  itens: [
    {
      titulo: '7 dias para pedir o dinheiro de volta',
      texto: 'Prazo contado a partir da compra, conforme o artigo 49 do Código de Defesa do Consumidor.',
    },
    {
      titulo: 'Ambiente de pagamento protegido',
      texto: 'O checkout é da plataforma, com criptografia. Nenhum dado de cartão passa por esta página.',
    },
    {
      titulo: 'Entrega confirmada por e-mail',
      texto: 'O PDF vai para o e-mail da compra assim que o pagamento é aprovado. Vale conferir o spam.',
    },
    {
      titulo: 'Suporte por e-mail',
      texto: 'Dúvida sobre acesso, pagamento ou reembolso é respondida pelo e-mail de contato.',
    },
  ],
}

/* -------------------------------- FAQ -------------------------------- */
export const FAQ = [
  {
    pergunta: 'É ebook em PDF ou curso em vídeo?',
    resposta:
      'É um ebook em PDF, com 74 páginas. Você baixa o arquivo, lê no celular, no computador ou imprime. Não tem plataforma de aula, login nem prazo de acesso: o arquivo fica com você.',
  },
  {
    pergunta: 'Isso é diferente do que já tem de graça na internet?',
    resposta:
      'O que tem de graça costuma ser conselho solto. Aqui tudo está na ordem de aplicação e com o critério de execução junto: o tamanho do bloco, o que conta como dia cumprido, o que fazer depois de falhar, o texto da mensagem, os seis blocos da proposta e o que responder em cada objeção. A diferença não está na informação, está em ter uma sequência para seguir.',
  },
  {
    pergunta: 'Preciso de experiência ou de alguma habilidade técnica?',
    resposta:
      'Não. O material começa pela rotina e só depois entra na parte de serviço. Os oito serviços listados vêm com o tempo médio de aprendizado de cada um, e os mais rápidos levam de três dias a uma semana.',
  },
  {
    pergunta: 'Quanto tempo por dia eu preciso ter?',
    resposta:
      'De 20 a 45 minutos por dia, e existe a versão mínima de cinco minutos para os dias impossíveis. O sistema foi montado justamente para quem trabalha ou estuda o dia inteiro.',
  },
  {
    pergunta: 'Já tentei outras coisas e parei no meio. Vai ser diferente?',
    resposta:
      'A parada no meio é o problema que o material trata primeiro, antes de qualquer coisa sobre dinheiro. O bloco, a grade e o protocolo de recaída existem exatamente para o dia em que a vontade acabar. Nenhum deles depende de você estar motivado.',
  },
  {
    pergunta: 'Vou precisar comprar mais alguma coisa depois?',
    resposta:
      'Não. O ebook completo é fechado em si mesmo, do primeiro dia à proposta enviada. No fim do material existe um convite opcional para acompanhamento comigo, mas nada do que está no plano depende disso.',
  },
  {
    pergunta: 'Como eu recebo e em quanto tempo?',
    resposta:
      'O PDF chega no e-mail cadastrado na compra assim que o pagamento é aprovado, o que costuma levar poucos minutos no Pix. Se não aparecer, confira o spam e depois escreva para o e-mail de contato.',
  },
  {
    pergunta: 'E se eu não gostar?',
    resposta:
      'Você tem 7 dias para pedir o reembolso pelo e-mail de contato e receber o valor de volta, conforme o Código de Defesa do Consumidor. Nenhuma pergunta, nenhum formulário.',
  },
  {
    pergunta: 'Isso é promessa de ganho rápido?',
    resposta:
      'Não, e esta página não faria isso. O que você recebe é método, rotina e um caminho de venda de serviço. Quanto você ganha, se ganhar, depende da sua aplicação, e nenhum valor é garantido aqui.',
  },
  {
    pergunta: 'Qual a diferença entre o inicial de R$ 10 e o completo?',
    resposta:
      'O inicial tem 45 páginas e trabalha a base: por que você trava, o que é disciplina na prática, os exercícios de repetição, as habilidades que o mercado paga e o desafio de 7 dias. O completo tem 74 páginas com tudo isso mais a parte que leva ao primeiro cliente: os oito serviços com preço, a lista de clientes, os scripts, a proposta, as objeções e o plano de 30 dias.',
  },
]

/* ------------------------------ CTA FINAL ------------------------------ */
export const CTA_FINAL = {
  eyebrow: 'Decisão',
  preco: 'R$ 34,90',
  precoApoio: 'pagamento único, com 7 dias de garantia',
  inicial: 'Ainda em dúvida?',
  inicialLink: 'Comece pelo material inicial, por R$ 10,00',
  titulo: 'Amanhã você vai estar 24 horas mais velho de qualquer jeito.',
  texto:
    'A única pergunta é se vai estar com o dia 1 feito ou no mesmo lugar. O PDF chega no seu e-mail em poucos minutos e a primeira tarefa dá para fazer hoje à noite.',
  botao: 'COMPRAR AGORA · R$ 34,90',
}
