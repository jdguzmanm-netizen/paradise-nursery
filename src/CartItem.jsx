import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  updateQuantity,
  selectTotalAmount,
  selectTotalQuantity,
} from './CartSlice';
import Navbar from './Navbar';
import './CartItem.css';

const formatMoney = (value) => `$${value.toFixed(2)}`;

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQuantity = useSelector(selectTotalQuantity);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Al llegar a 0 el reducer elimina la planta del carrito.
  const handleDecrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Próximamente: el pago estará disponible muy pronto. 🌱');
  };

  return (
    <div className="cart-page">
      <Navbar currentPage="cart" onNavigate={onNavigate} />

      <main className="cart-container">
        <h2 className="cart-title">Tu carrito de compras</h2>

        <div className="cart-summary">
          <div>
            <span className="summary-label">Total de plantas</span>
            <span className="summary-value" data-testid="total-quantity">{totalQuantity}</span>
          </div>
          <div>
            <span className="summary-label">Costo total</span>
            <span className="summary-value" data-testid="total-amount">{formatMoney(totalAmount)}</span>
          </div>
        </div>

        {items.length === 0 ? (
          <p className="cart-empty">Tu carrito está vacío. ¡Agrega algunas plantas!</p>
        ) : (
          <ul className="cart-list">
            {items.map((item) => (
              <li key={item.name} className="cart-item">
                <img className="cart-item-image" src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-unit">Precio unitario: {formatMoney(item.cost)}</p>
                  <p className="cart-item-subtotal">
                    Subtotal: <strong>{formatMoney(item.cost * item.quantity)}</strong>
                  </p>
                </div>

                <div className="cart-item-controls">
                  <button
                    className="qty-button"
                    aria-label={`Disminuir cantidad de ${item.name}`}
                    onClick={() => handleDecrement(item)}
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-button"
                    aria-label={`Aumentar cantidad de ${item.name}`}
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>

                <button className="delete-button" onClick={() => handleRemove(item)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-actions">
          <button className="continue-button" onClick={() => onNavigate('plants')}>
            Continuar comprando
          </button>
          <button className="checkout-button" onClick={handleCheckout}>
            Pagar
          </button>
        </div>
      </main>
    </div>
  );
}

export default CartItem;
