import React, {useState} from 'react';
import Navbar from "./componensts/Navbar/Navbar";
import DishForm from "./componensts/DishForm/DishForm";
import Dishes from "./componensts/Dishes/Dishes";
import type {Dish} from "./types";


function App() {

  const [dishes, setDishes] = useState<Dish[]>([{id: '1', name: 'Plov', description: 'Very tasty pilaf', image: '', price: 250},
    {id: '2', name: 'Another plov', description: 'Also pilaf', image: '', price: 350},]);

  const addDish = (newDish: Dish) =>{
    setDishes(prev => [...prev, newDish]);
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
            <Dishes dishes={dishes}/>
          </div>
          <div className="col">
            Cart
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
