import {ApiOrder, Order} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {createOrder, fetchOrders} from "./orderThunks";
import {RootState} from "../app/store";

interface OrdersState {
    orders: Order[];
    createLoading: boolean;
    fetchLoading: boolean;
}

const initialState: OrdersState = {
    orders: [],
    createLoading: false,
    fetchLoading: false,
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createOrder.pending, (state) => {
            state.createLoading = true;
        });
        builder.addCase(createOrder.fulfilled, (state) => {
            state.createLoading = false;
        });
        builder.addCase(createOrder.rejected, (state) => {
            state.createLoading = false;
        });
        builder.addCase(fetchOrders.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchOrders.fulfilled, (state, {payload}) => {
            state.fetchLoading = false;
            state.orders = payload;
        });
        builder.addCase(fetchOrders.rejected, (state) => {
            state.fetchLoading = false;
        })
    }
});

export const ordersReducer = ordersSlice.reducer;

export const selectOrderCreateLoading = (state: RootState) => state.orders.createLoading;
export const selectOrdersFetchLoading = (state: RootState) => state.orders.fetchLoading;
export const selectOrders = (state: RootState) => state.orders.orders;