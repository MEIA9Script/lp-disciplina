/* =========================================================
   CONTEUDO DA PAGINA
   Toda a copy fica aqui. Para ajustar textos, edite este arquivo
   e nao os componentes.
   ========================================================= */

export const LINKS = {
  checkout: 'https://pay.lowify.com.br/checkout.php?product_id=bGpm3F',
  checkoutInicial: 'https://pay.lowify.com.br/go.php?offer=glz6h75',
}

/* Valores exibidos na pagina. Trocar aqui atualiza hero, CTA final e FAQ. */
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

/* ----------------------------- HERO ----------------------------- */
export const HERO = {
  eyebrow: 'Método de execução para renda extra',
  // A headline e quebrada em tres partes: base, destaque e a palavra sublinhada.
  titulo: ['Transforme disciplina em uma', 'máquina de gerar', 'dinheiro.'],
  subtitulo:
    'A maioria não falha por falta de ideia. Falha por falta de rotina. Aqui você monta o sistema de execução diária que faz um projeto de renda extra sair do papel e continuar de pé no mês seguinte.',
  beneficios: [
    'Rotina montada para quem tem pouco tempo livre',
    'Passo a passo do primeiro projeto de renda online',
    'Método para não parar na terceira semana',
    'Acesso imediato, direto no seu e-mail',
  ],
  selos: ['Acesso imediato', 'Compra 100% online', 'Assista quando quiser'],
}

/* --------------------------- BENEFICIOS --------------------------- */
export const BENEFICIOS = [
  {
    icone: 'alvo',
    titulo: 'Foco em uma coisa só',
    texto:
      'Você para de pular de método em método e escolhe um caminho para executar até dar resultado, com critério para decidir o que ignorar.',
  },
  {
    icone: 'relogio',
    titulo: 'Cabe na sua semana real',
    texto:
      'Blocos curtos de execução pensados para quem trabalha, estuda ou cuida da casa. Sem depender de acordar às 5 da manhã.',
  },
  {
    icone: 'grade',
    titulo: 'Constância medida, não sentida',
    texto:
      'Você acompanha sua execução em uma grade simples. Quando o dia não sai, fica visível na hora e você corrige na mesma semana.',
  },
  {
    icone: 'raio',
    titulo: 'Do zero ao primeiro projeto',
    texto:
      'Um roteiro para escolher, montar e colocar no ar seu primeiro projeto de renda online sem travar na parte técnica.',
  },
  {
    icone: 'escudo',
    titulo: 'Sistema à prova de desânimo',
    texto:
      'Protocolo para os dias ruins: o que fazer quando a motivação some e como voltar sem perder tudo o que já foi construído.',
  },
  {
    icone: 'grafico',
    titulo: 'Decisão por número',
    texto:
      'Você aprende a olhar os poucos indicadores que importam e a decidir com base neles, em vez de decidir por impulso.',
  },
]

/* ----------------------- O QUE VOCÊ VAI RECEBER ----------------------- */
export const ENTREGAVEIS = [
  {
    etiqueta: 'Núcleo',
    titulo: 'Método completo em módulos',
    texto:
      'Todo o conteúdo organizado em aulas objetivas, na ordem certa de aplicação. Sem enrolação e sem aula de uma hora para explicar cinco minutos.',
  },
  {
    etiqueta: 'Prática',
    titulo: 'Plano de execução de 30 dias',
    texto: 'O que fazer em cada dia do primeiro mês, com tarefa definida e critério claro de dia cumprido.',
  },
  {
    etiqueta: 'Ferramenta',
    titulo: 'Grade de constância',
    texto: 'O painel que usei para não quebrar a sequência, pronto para você imprimir ou usar no celular.',
  },
  {
    etiqueta: 'Ferramenta',
    titulo: 'Checklist do projeto de renda',
    texto: 'Lista com as etapas de montagem do projeto, para você marcar o que já está feito e ver o que falta.',
  },
  {
    etiqueta: 'Apoio',
    titulo: 'Protocolo de recaída',
    texto: 'O passo a passo para voltar depois de falhar dois, cinco ou quinze dias, sem começar tudo de novo.',
  },
  {
    etiqueta: 'Acesso',
    titulo: 'Atualizações incluídas',
    texto: 'Novas aulas e materiais adicionados ao produto ficam disponíveis para quem já comprou, sem custo extra.',
  },
]

/* ------------------------------ PLANOS ------------------------------ */
export const PLANOS = {
  eyebrow: 'Escolha por onde começar',
  titulo: 'Duas formas de entrar',
  apoio: 'O inicial constrói a base. O completo leva do primeiro dia ao primeiro cliente.',
  itens: [
    {
      nome: 'Inicial',
      resumo: 'Para quem quer sair da procrastinação e provar que consegue manter uma rotina.',
      preco: 'R$ 10,00',
      destino: 'inicial',
      botao: 'COMEÇAR POR R$ 10',
      inclui: [
        'Por que você trava e como o ciclo da procrastinação se quebra',
        'O que é disciplina na prática, sem discurso de motivação',
        'Os exercícios de repetição para treinar todo dia',
        'As quatro habilidades que o mercado paga',
        'Os caminhos possíveis, com as plataformas de cada um',
        'O desafio de 7 dias, com tarefa por dia',
      ],
    },
    {
      nome: 'Completo',
      etiqueta: 'Mais escolhido',
      resumo: 'Tudo do inicial mais a parte que leva você até o primeiro cliente pagante.',
      preco: 'R$ 34,90',
      destino: 'checkout',
      botao: 'QUERO O COMPLETO',
      destaque: true,
      inclui: [
        'Tudo o que está no inicial',
        'O bloco de execução e a grade de constância',
        'O protocolo para quando você falhar',
        'Oito serviços para escolher, com faixa de preço de cada um',
        'Como montar a lista de clientes e abordar, com sete scripts prontos',
        'Precificação, modelo de proposta e resposta às objeções',
        'O plano de 30 dias, com critério de dia cumprido',
      ],
    },
  ],
}

/* ---------------------------- PARA QUEM É ---------------------------- */
export const PARA_QUEM_E = [
  'Quer começar a gerar renda extra pela internet e ainda não sabe por onde começar',
  'Já tentou antes, empolgou nos primeiros dias e parou na terceira semana',
  'Tem pouco tempo livre e precisa de uma rotina que caiba na vida real',
  'Consome muito conteúdo, salva tudo e executa pouco',
  'Quer um caminho definido em vez de mais uma lista de dicas soltas',
  'Está disposto a aplicar todos os dias, mesmo que em blocos curtos',
]

export const PARA_QUEM_NAO_E = [
  'Procura enriquecer rápido ou ganhar dinheiro sem trabalhar',
  'Quer um método automático que funcione sozinho enquanto você dorme',
  'Não pretende reservar nem alguns minutos por dia para executar',
  'Espera garantia de valores ou de prazo para o primeiro resultado',
  'Compra cursos para colecionar e nunca abre o material',
  'Não aceita ajustar a própria rotina em nada',
]

/* --------------------------- COMO FUNCIONA --------------------------- */
export const PASSOS = [
  {
    numero: '01',
    titulo: 'Compre pelo checkout',
    texto: 'Pagamento em ambiente seguro da plataforma, no cartão ou no Pix, em poucos minutos.',
  },
  {
    numero: '02',
    titulo: 'Receba o acesso',
    texto: 'Assim que o pagamento é confirmado, o acesso chega no e-mail cadastrado na compra.',
  },
  {
    numero: '03',
    titulo: 'Aplique no mesmo dia',
    texto: 'Você começa pelo plano de 30 dias e executa a primeira tarefa ainda hoje, sem esperar segunda-feira.',
  },
]

/* ------------------------ RESULTADOS ESPERADOS ------------------------ */
export const RESULTADOS = [
  {
    titulo: 'Uma rotina que você consegue manter',
    texto: 'Um bloco de execução fixo na sua semana, com tarefa definida e sem depender de motivação.',
  },
  {
    titulo: 'Clareza sobre o próximo passo',
    texto: 'Você abre o dia sabendo exatamente o que fazer, em vez de gastar a energia decidindo por onde começar.',
  },
  {
    titulo: 'Um projeto real no ar',
    texto: 'Sair do plano mental e ter algo publicado, funcionando e pronto para ser melhorado com o tempo.',
  },
  {
    titulo: 'Menos abandono no meio',
    texto: 'Um protocolo para atravessar a fase em que quase todo mundo desiste e voltar rápido depois de uma falha.',
  },
]

export const AVISO_RESULTADOS =
  'Os itens acima descrevem o que o método se propõe a construir. Não existe garantia de ganho financeiro, valor ou prazo: o resultado depende da aplicação individual, do tempo dedicado e do contexto de cada pessoa.'

/* ---------------------------- DEPOIMENTOS ---------------------------- */
/* Depoimentos ilustrativos, criados para demonstrar o layout.
   Substitua por relatos reais de alunos antes de publicar a página,
   junto com fotos autorizadas (troque `iniciais` por `foto`). */
export const DEPOIMENTOS = [
  {
    nome: 'Ana Ribeiro',
    contexto: 'Auxiliar administrativa, Cuiabá',
    iniciais: 'AR',
    nota: 5,
    texto:
      'O que mudou para mim foi o bloco de execução. Vinte minutos por dia, sempre no mesmo horário. Foi a primeira vez que cheguei ao fim de um mês sem largar no meio.',
  },
  {
    nome: 'Marcos Tadeu',
    contexto: 'Motorista de aplicativo, Goiânia',
    iniciais: 'MT',
    nota: 5,
    texto:
      'Eu já tinha comprado três cursos e não terminei nenhum. Aqui o material é curto e cada aula termina com uma tarefa. Isso me segurou.',
  },
  {
    nome: 'Juliana Prado',
    contexto: 'Estudante, Campinas',
    iniciais: 'JP',
    nota: 5,
    texto:
      'A grade de constância parece boba até você usar. Ver o dia em branco incomoda mais do que qualquer alarme no celular.',
  },
  {
    nome: 'Rafael Nunes',
    contexto: 'Vendedor, Belo Horizonte',
    iniciais: 'RN',
    nota: 4,
    texto:
      'Achei o começo mais duro do que esperava, porque exige escolher uma coisa só. Depois que aceitei isso, o resto ficou bem mais simples.',
  },
  {
    nome: 'Camila Souza',
    contexto: 'Mãe e autônoma, Recife',
    iniciais: 'CS',
    nota: 5,
    texto:
      'Consigo aplicar depois que as crianças dormem. O protocolo para dia ruim salvou minha semana mais de uma vez.',
  },
  {
    nome: 'Diego Martins',
    contexto: 'Técnico de TI, Curitiba',
    iniciais: 'DM',
    nota: 5,
    texto:
      'Gostei de ter indicador para acompanhar. Parei de decidir no achismo e passei a olhar o que estava realmente andando.',
  },
]

/* ----------------------------- GARANTIA ----------------------------- */
export const GARANTIA = {
  titulo: 'Compra segura, do começo ao fim',
  texto:
    'O pagamento acontece em ambiente criptografado da plataforma, que também cuida da liberação do acesso e do suporte da transação. Seus dados de pagamento não passam por esta página.',
  itens: [
    { titulo: 'Ambiente protegido', texto: 'Checkout com criptografia e processamento feito pela plataforma de pagamento.' },
    { titulo: 'Acesso confirmado por e-mail', texto: 'Você recebe os dados de acesso assim que o pagamento é aprovado.' },
    { titulo: 'Direitos do consumidor', texto: 'Sua compra é amparada pelo Código de Defesa do Consumidor, conforme os prazos e as condições exibidos no checkout.' },
    { titulo: 'Suporte por e-mail', texto: 'Qualquer dúvida sobre acesso ou pagamento é respondida pelo e-mail de contato.' },
  ],
}

/* -------------------------------- FAQ -------------------------------- */
export const FAQ = [
  {
    pergunta: 'Preciso de experiência para começar?',
    resposta:
      'Não. O material começa pela organização da rotina e só depois avança para a execução do projeto. Quem está do zero segue a mesma ordem, sem pular etapa.',
  },
  {
    pergunta: 'Quanto tempo por dia eu preciso ter?',
    resposta:
      'O método trabalha com blocos curtos de execução diária. A ideia é justamente caber na rotina de quem trabalha ou estuda, então não depende de você ter horas livres.',
  },
  {
    pergunta: 'Como eu recebo o acesso?',
    resposta:
      'Pelo e-mail cadastrado na compra, assim que o pagamento é confirmado pela plataforma. Vale conferir a caixa de spam nos primeiros minutos.',
  },
  {
    pergunta: 'Por quanto tempo fico com o material?',
    resposta:
      'O prazo de acesso é o informado pela plataforma na hora da compra. As atualizações lançadas dentro desse período ficam disponíveis para você sem custo adicional.',
  },
  {
    pergunta: 'Isso é promessa de ganho rápido?',
    resposta:
      'Não, e essa página não faria isso. O que você recebe é método e rotina de execução. O resultado depende da sua aplicação e nenhum valor é garantido.',
  },
  {
    pergunta: 'Serve para qual tipo de renda extra?',
    resposta:
      'O sistema de execução é o mesmo para qualquer projeto digital. O plano de 30 dias usa um caminho inicial definido para quem ainda não escolheu por onde começar.',
  },
  {
    pergunta: 'Funciona só pelo celular?',
    resposta:
      'Sim, dá para assistir e aplicar pelo celular. Algumas tarefas ficam mais confortáveis no computador, mas nenhuma delas depende disso.',
  },
  {
    pergunta: 'Quanto custa e quais formas de pagamento são aceitas?',
    resposta:
      'O método completo sai por R$ 34,90, em pagamento único. Existe também o material inicial, mais curto, por R$ 10,00. As formas disponíveis, incluindo cartão e Pix, aparecem no checkout da plataforma.',
  },
  {
    pergunta: 'Qual a diferença entre o inicial e o completo?',
    resposta:
      'O inicial trabalha a base: por que você trava, o que é disciplina na prática e o desafio de 7 dias. O completo tem tudo isso mais a parte que leva ao primeiro cliente, com os serviços e preços, os scripts de abordagem, a proposta e o plano de 30 dias.',
  },
]

/* ------------------------------ CTA FINAL ------------------------------ */
export const CTA_FINAL = {
  eyebrow: 'Última chamada',
  preco: 'R$ 34,90',
  precoApoio: 'pagamento único, sem mensalidade',
  inicial: 'Quer começar mais leve?',
  inicialLink: 'Comece pelo material inicial, por R$ 10,00',
  titulo: 'A diferença entre quem consegue e quem desiste é o dia de amanhã.',
  texto:
    'Você pode começar hoje com um caminho definido ou continuar tentando manter tudo na cabeça. O acesso é liberado assim que o pagamento é confirmado.',
}
