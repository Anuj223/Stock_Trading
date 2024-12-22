import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Signup from './Landing_page/signup/Signup.jsx'
import SupportPage from './Landing_page/support/SupportPage.jsx'
import About from './Landing_page/about/About.jsx'
import ProductPage from './Landing_page/products/ProductPage.jsx'
import PricingPage from './Landing_page/pricing/PricingPage.jsx'
import Navbar from './Landing_page/Navbar.jsx'
import Footer from './Landing_page/Footer.jsx'
import NotFound from './Landing_page/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
