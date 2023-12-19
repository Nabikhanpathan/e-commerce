const { createSlice } = require('@reduxjs/toolkit');

/*const cartSlice = createSlice({
    name: 'Nabi',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;*/
// cartSlice.js
//import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'Nabi',
    initialState: [],
    reducers: {
        add(state, action) {
            const existingItem = state.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        increaseQuantity(state, action) {
            const item = state.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity(state, action) {
            const item = state.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        clearCart(state) {
            return [];
        },
        // Add a payment action (assuming a simple implementation for demonstration)
        makePayment(state) {
            // Add your payment logic here
            console.log('Payment successful!');
            return state; // or return an empty array to clear the cart after payment
        },
    },
});

export const { add, remove, increaseQuantity, decreaseQuantity, clearCart, makePayment } = cartSlice.actions;
export default cartSlice.reducer;

 