import '@ant-design/v5-patch-for-react-19' // must be at the top
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import { ThemeProvider } from './styles'

import '@/styles/globals.css'
import '@/dapp/components/Loader/loader.css'

// default enable dark mode - add dark class to the HTML root element
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('dark')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider {...{
      currentThemeName: 'purple', 
      isDarkMode: true,
    }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

