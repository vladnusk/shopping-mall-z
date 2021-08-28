import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../configureStore'

// Define a type for the slice state
interface FavoritesItem {
  productId: string;
  name: string;
  image: string;
  isFavorite?: boolean;
}

const initialState: FavoritesItem[] = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoritesItem>) => {
      return [action.payload, ...state]
    },
    removeFavorite: (state, action: PayloadAction<FavoritesItem>) => {
      state = state.filter(({ productId }) => productId !== action.payload.productId);
      return state
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFavorites = (state: RootState) => state.favorites

export default favoritesSlice.reducer