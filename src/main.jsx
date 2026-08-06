import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Ordem importa: tokens, base e movimento antes de qualquer componente.
import './styles/tokens.css'
import './styles/base.css'
import './styles/animations.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
