import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from './CartSlice';
import './Navbar.css';

/*
 * Cabecera compartida por la página de plantas y la del carrito.
 * Enlaces: Inicio, Plantas y Carrito. El icono del carrito muestra
 * dinámicamente el número total de artículos.
 */
function Navbar({ currentPage, onNavigate }) {
  const totalQuantity = useSelector(selectTotalQuantity);

  const link = (page, label) => (
    <a
      href="#"
      className={currentPage === page ? 'nav-link active' : 'nav-link'}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(page);
      }}
    >
      {label}
    </a>
  );

  return (
    <header className="navbar">
      <div className="navbar-brand" onClick={() => onNavigate('home')}>
        <span className="navbar-logo" aria-hidden="true">🌿</span>
        <div>
          <h1>Paradise Nursery</h1>
          <small>Tu hogar, más verde</small>
        </div>
      </div>

      <nav className="navbar-links">
        {link('home', 'Inicio')}
        {link('plants', 'Plantas')}
        <a
          href="#"
          className={currentPage === 'cart' ? 'nav-link active cart-link' : 'nav-link cart-link'}
          aria-label={`Carrito, ${totalQuantity} artículos`}
          onClick={(e) => {
            e.preventDefault();
            onNavigate('cart');
          }}
        >
          <svg viewBox="0 0 256 256" width="38" height="38" aria-hidden="true">
            <rect width="256" height="256" fill="none" />
            <circle cx="80" cy="216" r="12" fill="currentColor" />
            <circle cx="184" cy="216" r="12" fill="currentColor" />
            <path
              d="M42.3 72H221.7l-26.4 92.4A16 16 0 0 1 179.9 176H84.1a16 16 0 0 1-15.4-11.6L32.5 37.8A8 8 0 0 0 24.8 32H8"
              fill="none"
              stroke="currentColor"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="cart-count">{totalQuantity}</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
