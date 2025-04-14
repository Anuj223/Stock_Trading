import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import Login from "./Login.jsx";
import Signup from './Signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookiesProvider>

    <BrowserRouter>
    <Routes>

    <Route path="/*" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
    </CookiesProvider>
  </StrictMode>,
)
