import React, {useCallback, useEffect, useState} from 'react';
import {ApiOrdersList, Order} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectOrders, selectOrdersFetchLoading} from "../../store/ordersSlice";
import {fetchOrders} from "../../store/orderThunks";

const Orders = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectOrdersFetchLoading);
  const orders = useAppSelector(selectOrders);
  

  //const [orders, setOrders] = useState<Order[]>([]);
  //const [loading, setLoading] = useState(false);



  useEffect( () =>{
    void dispatch(fetchOrders());
  }, [dispatch])

  return (
    <div className="row mt-2">
      <div className="col">
        <h4>Orders</h4>
        {loading ? <Spinner/> : (
          <>
            {orders.map(order => (
              <div key={order.id} className="card mb-2">
                <div className="card-body">
                  <strong>{order.customer.name}</strong>
                  <span>ordered for a total price of</span>
                  <strong>{order.totalPrice}</strong>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Orders;