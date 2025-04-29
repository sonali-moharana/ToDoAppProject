import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoApp from './ToDoApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoApp />
  </StrictMode>,
)
