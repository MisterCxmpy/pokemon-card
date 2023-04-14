import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { RefreshProvider } from './components/context/RefreshContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RefreshProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RefreshProvider>
)
