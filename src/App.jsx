import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  // Páginas: 'home' (aterrizaje), 'plants' (listado) y 'cart' (carrito)
  const [page, setPage] = useState('home');

  if (page === 'plants') return <ProductList onNavigate={setPage} />;
  if (page === 'cart') return <CartItem onNavigate={setPage} />;

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-hero">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="company-slogan">Donde la naturaleza encuentra tu hogar</p>
          <button className="get-started-button" onClick={() => setPage('plants')}>
            Comenzar
          </button>
        </div>

        <AboutUs />
      </div>
    </div>
  );
}

export default App;
