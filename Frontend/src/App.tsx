import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "../src/context/CartContext";
import Header from "./components/UI/Header";
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import './styles/global.css';
import styled from "styled-components";




const App = () => {
  return (
    <>
    <Router>
    <CartProvider>
    <Header/>
    <MainContent>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </MainContent>
    </CartProvider>
    </Router>
    
    </>
  )
}

export default App

const MainContent = styled.main`
  display: flex; 
  justify-content: center;
  align-items: center;  
  margin-top: 20px;
  
`;