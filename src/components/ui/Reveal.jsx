import { useReveal } from '../../hooks/useReveal'

/**
 * Envolve qualquer bloco e revela quando ele entra na tela.
 * `atraso` em ms escalona os itens de uma mesma grade.
 */
export default function Reveal({ children, atraso = 0, as: Tag = 'div', className = '', ...resto }) {
  const { ref, visivel } = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visivel ? 'is-visivel' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${atraso}ms` }}
      {...resto}
    >
      {children}
    </Tag>
  )
}
