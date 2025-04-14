import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';

// Load wishlist from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('wishlist');
    if (serializedState === null) return [];
    return JSON.parse(serializedState);
  } catch (e) {
    return [];
  }
};

// Save wishlist to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('wishlist', serializedState);
  } catch (e) {
    console.log('Could not save state', e);
  }
};

const preloadedState = {
  wishlist: loadState(),
};

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
  preloadedState,
});

// Subscribe to store changes to persist wishlist
store.subscribe(() => {
  saveState(store.getState().wishlist);
});
