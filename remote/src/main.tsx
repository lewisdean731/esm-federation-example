import React from 'react'
import ReactDOM from 'react-dom/client'
import WebApp from './App.tsx'
import './index.css'

customElements.define("web-app", WebApp)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <p>This is the remote</p>
  </React.StrictMode>,
)
