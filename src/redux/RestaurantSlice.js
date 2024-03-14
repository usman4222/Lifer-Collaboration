import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurant: null,
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        },
        removeRestaurant: (state) => {
            state.restaurant = null
        },
    },
})

export const { setRestaurant, removeRestaurant } = restaurantSlice.actions
export default restaurantSlice.reducer
