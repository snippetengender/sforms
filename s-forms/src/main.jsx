import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import { GoogleOAuthProvider } from '@react-oauth/google'
// 
// const CLIENT_ID = "22384891134-8jdk47el46pndigcvao7mer427t1mqm4.apps.googleusercontent.com"
// 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* < GoogleOAuthProvider> */}
      <App/>
    {/* </GoogleOAuthProvider> */}
  </StrictMode>,
)
