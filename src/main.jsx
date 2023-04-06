import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {FavioritesContextProvider} from './store/FavioritesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavioritesContextProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </FavioritesContextProvider>
)
