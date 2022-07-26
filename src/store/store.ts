import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/cartSlice';
import breadCrumbsReducer from './breadCrumbsSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        breadCrumbs: breadCrumbsReducer,
    },
});
