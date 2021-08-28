import { IProduct } from './../../../models/IProduct';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../configureStore'

// Define a type for the slice state
export interface CartItem {
    product: IProduct;
    quantity: number;
  }

  const initialState: CartItem[] = []

  export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<CartItem>) => {
        return [action.payload, ...state]
      },
      removeFromCart: (state, action: PayloadAction<CartItem>) => {
        state = state.filter((item: CartItem) => item.product.productId !== action.payload.product.productId);
        return state
      },
      addOne: (state, action: PayloadAction<CartItem>) => {
        const indexToModify = state.findIndex((item: CartItem) => item.product.productId === action.payload.product.productId)
        state[indexToModify].quantity += 1
        
      }, 
      removeOne: (state, action: PayloadAction<CartItem>) => {
        const indexToModify = state.findIndex((item: CartItem) => item.product.productId === action.payload.product.productId)
        state[indexToModify].quantity -= 1
        if(state[indexToModify].quantity <= 0) {console.log(state[indexToModify].quantity <= 0)}
        
      }
    }
  })
  
  export const { addToCart, removeFromCart, addOne, removeOne } = cartSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectCartItems = (state: RootState) => state.cart
  
  export default cartSlice.reducer