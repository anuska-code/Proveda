import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/AboutUs/About.jsx";
import Product from "./pages/Productss/Product.jsx";
import Contactus from "./pages/ContactUs/Contactus.jsx";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Product/>}/>
         <Route path="/contact" element={<Contactus/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;