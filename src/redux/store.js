import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './RestaurantSlice'

export const store = configureStore({
    reducer: {
        restaurant: restaurantReducer,
    },
})
