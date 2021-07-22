import React from 'react';
import "./Form.css";
export const Form = ({
  handleSubmit,
  item,
  setItemToValue,
  quantity,
  incrementQuantity,
  reduceQuantity
}) => (
  <form onSubmit={handleSubmit}>
    <div className="input-div">
      <input
        className="item-input"
        type="text"
        maxLength="15"
        
        placeholder="Enter an item"
        onChange={e => setItemToValue(e.target.value)}
        value={item}
      />
      <div className="quantity-container">
        <button
          className="subtract-item-button button-quantity"
          type="button"
          onClick={() => reduceQuantity()}
        >
          -
        </button>
        <p>{quantity}</p>

        <button
          className="add-item-button button-quantity"
          type="button"
          onClick={() => incrementQuantity()}
        >
          +
        </button>
      </div>
    </div>
    <button className="add-button" type="submit">
      Add To List
    </button>
  </form>
);