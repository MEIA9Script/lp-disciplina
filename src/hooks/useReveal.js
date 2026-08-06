import { useEffect, useRef, useState } from 'react'

/**
 * Observa um elemento e marca quando ele entra na viewport.
 * Um unico IntersectionObserver por elemento, desconectado apos revelar.
 * Sem lib de animacao: o efeito visual vive em animations.css.
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Navegador antigo ou movimento reduzido: mostra direto.
    const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (semMovimento || typeof IntersectionObserver === 'undefined') {
      setVisivel(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, visivel }
}
