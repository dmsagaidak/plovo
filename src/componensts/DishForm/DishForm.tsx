import React, {useState} from 'react';
import {Dish} from "../../types";
import {DishMutation} from "../../types";

interface Props {
  onSubmit: (dish: Dish) => void;
}

const DishForm: React.FC<Props> = ({onSubmit}) => {
  const [dish, setDish] = useState<DishMutation>({
    name: '',
    description: '',
    image: '',
    price: '',
  });

  const onDishChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setDish(prev =>({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...dish,
      price: parseFloat(dish.price),
    })
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new Dish</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-control"
          value={dish.name}
          onChange={onDishChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
        id="description"
        name="description"
        className="form-control"
        value={dish.description}
        onChange={onDishChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageUrl">Image</label>
        <input
          type="url"
          name="image"
          id="image"
          className="form-control"
          value={dish.image}
          onChange={onDishChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="price">Price</label>
        <input
        id="price"
        name="price"
        type="number"
        className="form-control"
        value={dish.price}
        onChange={onDishChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  );
};

export default DishForm;