import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import Navbar from './Navbar';
import './ProductList.css';

const img = (slug) => `${import.meta.env.BASE_URL}plants/${slug}.svg`;

// 3 categorías, 6 plantas únicas por categoría (18 en total)
const plantsArray = [
  {
    category: 'Plantas aromáticas',
    plants: [
      { name: 'Lavender', image: img('lavender'), description: 'Aroma relajante y flores moradas.', cost: 15 },
      { name: 'Jasmine', image: img('jasmine'), description: 'Flores blancas de fragancia dulce.', cost: 18 },
      { name: 'Rosemary', image: img('rosemary'), description: 'Hierba culinaria de aroma intenso.', cost: 12 },
      { name: 'Mint', image: img('mint'), description: 'Fresca, ideal para infusiones.', cost: 10 },
      { name: 'Basil', image: img('basil'), description: 'Imprescindible en la cocina.', cost: 9 },
      { name: 'Lemon Balm', image: img('lemon-balm'), description: 'Aroma cítrico que calma.', cost: 14 },
    ],
  },
  {
    category: 'Purificadoras del aire',
    plants: [
      { name: 'Snake Plant', image: img('snake-plant'), description: 'Casi indestructible y filtra toxinas.', cost: 22 },
      { name: 'Spider Plant', image: img('spider-plant'), description: 'Fácil de cuidar y de multiplicar.', cost: 16 },
      { name: 'Peace Lily', image: img('peace-lily'), description: 'Elegante, florece en sombra.', cost: 24 },
      { name: 'Boston Fern', image: img('boston-fern'), description: 'Frondosa; aporta humedad al aire.', cost: 20 },
      { name: 'Rubber Plant', image: img('rubber-plant'), description: 'Hojas grandes y brillantes.', cost: 28 },
      { name: 'Aloe Vera', image: img('aloe-vera'), description: 'Purifica y es útil para la piel.', cost: 14 },
    ],
  },
  {
    category: 'Plantas tropicales',
    plants: [
      { name: 'Monstera', image: img('monstera'), description: 'Hojas perforadas muy decorativas.', cost: 35 },
      { name: 'Bird of Paradise', image: img('bird-of-paradise'), description: 'Aire exótico y gran porte.', cost: 40 },
      { name: 'Calathea', image: img('calathea'), description: 'Hojas con patrones llamativos.', cost: 26 },
      { name: 'Fiddle Leaf Fig', image: img('fiddle-leaf-fig'), description: 'Icono del diseño de interiores.', cost: 45 },
      { name: 'Areca Palm', image: img('areca-palm'), description: 'Palmera luminosa para tu sala.', cost: 32 },
      { name: 'Anthurium', image: img('anthurium'), description: 'Flores rojas brillantes todo el año.', cost: 30 },
    ],
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Un producto está "añadido" si ya está en el carrito (así el estado
  // del botón se mantiene aunque cambies de página o elimines desde el carrito).
  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
  };

  return (
    <div className="product-page">
      <Navbar currentPage="plants" onNavigate={onNavigate} />

      <main className="product-grid-container">
        {plantsArray.map((group) => (
          <section key={group.category} className="category">
            <h2 className="category-title">{group.category}</h2>
            <div className="product-grid">
              {group.plants.map((plant) => {
                const added = isInCart(plant.name);
                return (
                  <article key={plant.name} className="product-card">
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <h3 className="product-title">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <p className="product-price">${plant.cost}</p>
                    <button
                      className={added ? 'product-button added' : 'product-button'}
                      onClick={() => handleAddToCart(plant)}
                      disabled={added}
                    >
                      {added ? 'Añadida ✓' : 'Añadir a la cesta'}
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
