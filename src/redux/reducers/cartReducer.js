import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM, CLEAR_CART } from '../actions/actionTypes';

const initialState = {
  items: [], // Array of cart items
  total: 0,  // Total cost of items in the cart
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        // If item already exists, increase its quantity
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.price * action.payload.quantity,
        };
      }

      // Add new item
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price * action.payload.quantity,
      };
    }

    case REMOVE_FROM_CART: {
      const itemToRemove = state.items.find((item) => item.id === action.payload);
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: updatedItems,
        total: state.total - (itemToRemove.price * itemToRemove.quantity),
      };
    }

    case UPDATE_CART_ITEM: {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      const total = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      return {
        ...state,
        items: updatedItems,
        total,
      };
    }

    case CLEAR_CART:
      return {
        ...state,
        items: [],
        total: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;