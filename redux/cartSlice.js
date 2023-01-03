import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProducts: (state, action) => {
            state.products.push(action.payload);
            state.quantity += action.payload.quantity;
            state.total += action.payload.price;
        },
        reset: (state, action) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});

export const { addProducts, reset } = cartSlice.actions;
export default cartSlice.reducer;