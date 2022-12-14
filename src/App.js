import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path ="/" element= {<Home />} />
      <Route path ="/products" element= {<Products />} />
      <Route path ="/about" element= {<About />} />
      <Route path ="/contact" element = {<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App