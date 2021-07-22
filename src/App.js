import React, {useState} from 'react'
import { Form } from './components/Form/Form.component';
import { ListItem } from './components/ListItem/ListItem.component';
import './App.css';

export default function App() {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [shoppingList, setShoppingList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (item === '') return;

    const newItem = {
      id: new Date().getTime(),
      text: item,
      quantity: quantity,
      completed: false
    };

    setShoppingList([...shoppingList].concat(newItem));
    setItem('');
    setQuantity(1);
  }

  function setItemToValue(text) {
    setItem(text);
  }
  function removeItem(id) {
    const updatedList = [...shoppingList].filter(listItem => listItem.id !== id);
    setShoppingList(updatedList);
  }
  function incrementQuantity() {
    const incremented = quantity + 1;
    setQuantity(incremented);
  }
  function reduceQuantity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }
  function toggleCompleted(id) {
    const updatedList = [...shoppingList].map(listItem => {
      if (listItem.id === id) {
        listItem.completed = !listItem.completed;
      }
      return listItem;
    });
    setShoppingList(updatedList);
  }

  return (
    <div className="main-app-div">
      <h1>Shopping List</h1>
      <Form
        handleSubmit={handleSubmit}
        item={item}
        setItemToValue={setItemToValue}
        quantity={quantity}
        incrementQuantity={incrementQuantity}
        reduceQuantity={reduceQuantity}
      />

      {shoppingList.map((listItem, index) => (
        <ListItem
          listItem={listItem}
          index={index}
          key = {listItem.id}
          totalOfItems={shoppingList.length}
          toggleCompleted={toggleCompleted}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
}
