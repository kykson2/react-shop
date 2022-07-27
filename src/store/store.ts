import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/cartSlice';
import breadCrumbsReducer from '@/store/breadCrumbsSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        breadCrumbs: breadCrumbsReducer,
    },
});
