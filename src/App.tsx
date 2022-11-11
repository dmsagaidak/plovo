import React, {useState} from 'react';
import Navbar from "./componensts/Navbar/Navbar";
import DishForm from "./componensts/DishForm/DishForm";
import Dishes from "./componensts/Dishes/Dishes";
import type {Dish} from "./types";
import type {CartDish} from "./types";
import Cart from "./componensts/Cart/Cart";


function App() {

  const [dishes, setDishes] = useState<Dish[]>([
    {id: '1', name: 'Plov', description: 'Very tasty pilaf', image: '', price: 250},
    {id: '2', name: 'Another plov', description: 'Also pilaf', image: '', price: 350},
  ]);

  const [cartDishes, setCartDishes] = useState<CartDish[]>([])


  const addDish = (newDish: Dish) =>{
    setDishes(prev => [...prev, newDish]);
  };

  const addDishToCart = (dish: Dish) =>{
    setCartDishes(prev => {
      const existingIndex = prev.findIndex(item => {
        return item.dish === dish;
      });

      if(existingIndex !== -1) {
        const itemsCopy = [...prev];
        const itemCopy = {...prev[existingIndex]};
        itemCopy.amount ++;
        itemsCopy[existingIndex] = itemCopy;
        return itemsCopy;
      }

      return [...prev, {dish, amount: 1}];
    });
  };

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col">
            <DishForm onSubmit={addDish}/>
          </div>
          <div className="col">
            <Dishes dishes={dishes} addToCart={addDishToCart}/>
          </div>
          <div className="col">
            <Cart cartDishes={cartDishes}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
