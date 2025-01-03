import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM, CLEAR_CART } from './actionTypes.js';

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item, 
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id, 
  };
};

export const updateCartItem = (id, quantity) => {
  return {
    type: UPDATE_CART_ITEM,
    payload: { id, quantity }, 
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
