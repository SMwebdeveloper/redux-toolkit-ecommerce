import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cartStore'

import productSlice from './productSlice'

const store = configureStore({
    reducer:{
        cart: cartReducer,
        product: productSlice
    }
})

 
export default store