import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiOrder, Order, ApiOrdersList} from "../types";
import axiosApi from "../axiosApi";

export const createOrder = createAsyncThunk<void, ApiOrder>(
  'orders/create',
  async(order) => {
    await axiosApi.post('orders.json', order)
  }
);

export const fetchOrders = createAsyncThunk<Order[], undefined>(
  'orders/fetch',
  async () => {
    const ordersResponse = await axiosApi.get<ApiOrdersList | null>('/orders.json');
    const orders = ordersResponse.data;

    let newOrders: Order[] = [];


    if(orders) {
      newOrders = Object.keys(orders).map(id => {
        const order = orders[id];
        const totalPrice = order.dishes.reduce((acc, cartDish) => {
          return acc + (cartDish.dish.price * cartDish.amount);
        }, 0);

        return {
          ...order,
          totalPrice,
          id,
        };
      });
    }

    return newOrders;
  }
)

