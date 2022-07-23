import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    id: number;
    count: number;
}

const initialState: IinitialState[] = [];
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setProductReducer: (state, action) => {
            state.map((product: IinitialState) => {
                if (product.id === action.payload.id) {
                    product.count += action.payload.count;
                }
            });

            state.filter(
                (product: IinitialState) => product.id === action.payload.id
            ).length === 0 && state.push(action.payload);

            localStorage.setItem('cart', JSON.stringify(state));
        },

        addProductCount: (state, action) => {
            state.map((product: IinitialState) => {
                if (product.id === action.payload.id) {
                    product.count += action.payload.count;
                }
            });

            localStorage.setItem('cart', JSON.stringify(state));
        },

        subProductCount: (state, action) => {
            state.map((product: IinitialState) => {
                if (product.id === action.payload.id && product.count) {
                    product.count -= action.payload.count;
                }

                console.log(state.indexOf(product));

                if (!product.count) state.splice(state.indexOf(product), 1);
            });

            localStorage.setItem('cart', JSON.stringify(state));
        },
    },
});

export const { setProductReducer, addProductCount, subProductCount } =
    cartSlice.actions;
export default cartSlice.reducer;
