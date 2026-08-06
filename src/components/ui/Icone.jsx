/**
 * Icones em SVG inline (stroke), desenhados no mesmo grid de 24px.
 * Sem pacote de icones: menos peso e controle total do traco.
 */
const CAMINHOS = {
  alvo: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  relogio: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.2V12l3.2 2" />
    </>
  ),
  grade: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <path d="M14 17.2l2.1 2.1 4-4.3" />
    </>
  ),
  raio: <path d="M13.4 2.8 5.6 13.2h5.2l-.7 8 7.8-10.4h-5.2z" />,
  escudo: (
    <>
      <path d="M12 2.9 4.8 5.8v5.5c0 4.4 3 8.3 7.2 9.7 4.2-1.4 7.2-5.3 7.2-9.7V5.8z" />
      <path d="M8.9 12.1l2.2 2.2 4-4.5" />
    </>
  ),
  grafico: (
    <>
      <path d="M3.6 20.2h16.8" />
      <path d="M6.8 16.5V11" />
      <path d="M12 16.5V6.4" />
      <path d="M17.2 16.5v-7" />
    </>
  ),
  check: <path d="M4.8 12.6l4.6 4.6 9.8-10.4" />,
  x: <path d="M6.2 6.2l11.6 11.6M17.8 6.2 6.2 17.8" />,
  seta: <path d="M5 12h14M13 6l6 6-6 6" />,
  cadeado: (
    <>
      <rect x="4.6" y="10.4" width="14.8" height="10.2" rx="3" />
      <path d="M8.4 10.4V7.8a3.6 3.6 0 0 1 7.2 0v2.6" />
    </>
  ),
  mais: <path d="M12 5.5v13M5.5 12h13" />,
  estrela: (
    <path d="m12 3.6 2.6 5.3 5.9.85-4.25 4.15 1 5.85L12 16.9l-5.25 2.85 1-5.85L3.5 9.75l5.9-.85z" />
  ),
}

export default function Icone({ nome, tamanho = 24, className = '', preenchido = false }) {
  const conteudo = CAMINHOS[nome]
  if (!conteudo) return null

  return (
    <svg
      className={className}
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill={preenchido ? 'currentColor' : 'none'}
      stroke={preenchido ? 'none' : 'currentColor'}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {conteudo}
    </svg>
  )
}
