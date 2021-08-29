import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favorites/favoritesSlice';
import cartReducer from './slices/shoppingCart/shoppingCartSlice';
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from './slices/productsApi/productsApi';
import productFiltersReducer from './slices/filterProducts/filterProducts'
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    productFilters: productFiltersReducer
  },
  middleware: (getDefaultMiddiware) =>
    getDefaultMiddiware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
