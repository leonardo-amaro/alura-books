import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EstilosGlobais from './components/EstilosGlobais'
import AppRoutes from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EstilosGlobais />
    <AppRoutes />
  </StrictMode>
)