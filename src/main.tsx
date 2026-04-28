import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {GlobalStyle} from "./styles/base/globalStyles.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyle/>
        <App/>
    </StrictMode>,
)
