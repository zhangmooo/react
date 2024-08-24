import './style.css';
import React, {useState} from 'react';

function App(){

  
  const [newItem,setNewItem]=useState("");
  const [items,setItems]=useState([]);

  function addItem(){
    if(!newItem){
      alert("input iter");
    }
    const item={
      id:Math.floor(Math.random()*1000),
      value:newItem
    };
    // @ts-ignores-
    setItems(oldList=>[...oldList,item]);
    setNewItem("");
// @ts-ignore

  function deleteItem(id){
    // @ts-ignore
      const newArray=items.filter(item=>item.id !==id);
      setItems(newArray);
    }
  
  return(
    <div className="App">
      <h1>Todo List App</h1>

      <input
       type="text"
       placeholder='Add an item'
       value={newItem}
       onChange={e=>setNewItem(e.target.value)}
      />
      <button onClick={()=>addItem()}>Add</button>
      <ul>
        {items.map(item=>{
          return(
            // @ts-ignore
            <li key={item.id}>{item.value}<button onClick={()=>deleteItem(item.id)}>DELETE</button></li>
          )
        })}
      </ul>
    </div>
  );
}}
export default App;