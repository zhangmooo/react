import './style.css';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState<any[]>([]);

  function addItem() {
    if (!newItem) {
      alert('input iter');
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem('');
  }

    // @ts-ignore
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>

      <input
        type="text"
        placeholder="Add an item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}
              <button onClick={() => deleteItem(item.id)}>DELETE</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
