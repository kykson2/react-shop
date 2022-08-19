import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    id: number;
    title: string;
    count: number;
}

interface Ipayload {
    payload: IinitialState;
    type: string;
}

const initialState: IinitialState[] = [];
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getStoregyCartListReducer: (
            state: IinitialState[],
            action: Ipayload
        ) => {
            state.filter(
                (product: IinitialState) => product.id === action.payload.id
            ).length === 0 && state.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state));
        },

        setProductReducer: (state: IinitialState[], action: Ipayload) => {
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

        addProductCount: (state: IinitialState[], action: Ipayload) => {
            state.map((product: IinitialState) => {
                if (product.id === action.payload.id) {
                    product.count += action.payload.count;
                }
                if (!product.count) state.splice(state.indexOf(product), 1);
            });

            localStorage.setItem('cart', JSON.stringify(state));
        },

        subProductCount: (state: IinitialState[], action: Ipayload) => {
            state.map((product: IinitialState) => {
                if (product.id === action.payload.id && product.count) {
                    product.count -= action.payload.count;
                }

                if (!product.count) state.splice(state.indexOf(product), 1);
            });

            localStorage.setItem('cart', JSON.stringify(state));
        },

        removeCart: (state: IinitialState[]) => {
            state.map((product: IinitialState) => {
                if (product.count) state.splice(state.indexOf(product));
            });
            localStorage.setItem('cart', JSON.stringify(state));
        },
    },
});

export const {
    getStoregyCartListReducer,
    setProductReducer,
    addProductCount,
    subProductCount,
    removeCart,
} = cartSlice.actions;
export default cartSlice.reducer;
