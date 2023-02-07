import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    isCartOpen: boolean;
    cart: any[];
    items: any[];
}

const initialState: CartState = {
    isCartOpen: false,
    cart: [],
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload.item];
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        increaseItemCount: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    item.count++;
                }
            });
        },
        decreaseItemCount: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id === action.payload.id && item.count > 1) {
                    item.count--;
                }
            });
        },
        setCartIsOpen: state => {
            state.isCartOpen = !state.isCartOpen;
        },
    },
});

export const { setItems, addToCart, removeFromCart, increaseItemCount, decreaseItemCount, setCartIsOpen } =
    cartSlice.actions;
export default cartSlice.reducer;
