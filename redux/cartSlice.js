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
    },
});

export const { addProducts } = cartSlice.actions;
export default cartSlice.reducer;