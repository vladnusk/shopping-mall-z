import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../configureStore'

const initialState: { query: string | null } = {
    query: ''
}

export const productFiltersSlice = createSlice({
  name: 'productFilters',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string | null>) {
        state.query = action.payload;
    }
  },
})

export const { setQuery } = productFiltersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProductFilters = (state: RootState) => state.productFilters

export default productFiltersSlice.reducer