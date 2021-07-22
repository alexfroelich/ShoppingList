import React from 'react';
import './ListItem.css';

export const ListItem = ({
  listItem,
  index,
  totalOfItems,
  toggleCompleted,
  removeItem
}) => (
  <div
    className={
      index === totalOfItems - 1
        ? 'list-item-container no-border-bottom'
        : ' list-item-container border-bottom'
    }
    
  >
    <p
      className={listItem.completed ? 'completed-list-item list-item' : 'list-item'}
      onClick={() => toggleCompleted(listItem.id)}
    >
      {listItem.quantity}x {listItem.text}
    </p>
    <button className="delete-button" onClick={() => removeItem(listItem.id)}>
      X
    </button>
  </div>
);
