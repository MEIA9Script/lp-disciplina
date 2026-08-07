/* =========================================================
   PONTE DE ANALYTICS
   Os scripts do Meta Pixel e do GA4 entram no index.html.
   Este arquivo so dispara os eventos, sem quebrar a pagina
   quando nenhuma tag esta instalada (ambiente de dev, por exemplo).
   ========================================================= */

/**
 * Dispara o mesmo evento no Meta Pixel e no GA4.
 * @param {string} evento  Nome do evento (ex.: 'InitiateCheckout')
 * @param {object} dados   Parametros opcionais
 */
export function rastrear(evento, dados = {}) {
  if (typeof window === 'undefined') return

  // Meta Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('track', evento, dados)
  }

  // Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', evento, dados)
  }
}

/** Clique em qualquer botao que leva ao checkout. */
export function rastrearCheckout(origem) {
  rastrear('InitiateCheckout', { content_name: 'Disciplina que Dá Dinheiro', origem })
}
