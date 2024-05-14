import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import TagContextProvider from './contexts/TagContextProvider.tsx'
import WaifuDisplayContextProvider from './contexts/WaifuDisplayContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TagContextProvider>
      <WaifuDisplayContextProvider>
        <App />
      </WaifuDisplayContextProvider>
    </TagContextProvider>
  </React.StrictMode>,
)
