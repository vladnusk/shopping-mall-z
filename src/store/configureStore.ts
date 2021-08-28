import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favorites/favoritesSlice';
import cartReducer from './slices/shoppingCart/shoppingCartSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
