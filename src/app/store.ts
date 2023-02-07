import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "../store/cartSlice";
import {dishesReducer} from "../store/dishesSlice";
import {ordersReducer} from "../store/ordersSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dishes: dishesReducer,
    orders: ordersReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;