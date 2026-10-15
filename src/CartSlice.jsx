import { createSlice } from '@reduxjs/toolkit';

/*
 * Estado del carrito:
 *   items: [{ name, image, cost, quantity }]
 * `cost` es un número (precio unitario) para evitar conversiones de texto.
 */
const initialState = {
  items: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Añade una planta; si ya existe, aumenta su cantidad en 1.
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existing = state.items.find((item) => item.name === name);
      if (existing) {
        existing.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Elimina por completo una planta del carrito.
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },

    // Fija la cantidad de una planta (payload: { name, quantity }).
    // Si la cantidad llega a 0 o menos, la planta se elimina.
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((i) => i.name === name);
      if (!item) return;
      if (quantity <= 0) {
        state.items = state.items.filter((i) => i.name !== name);
      } else {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Selectores reutilizables
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectTotalAmount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.cost * item.quantity, 0);

export default CartSlice.reducer;
