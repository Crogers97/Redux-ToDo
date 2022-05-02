import React from 'react';
import Input from './components/Input';
import './App.css';
import TodoItem from './components/TodoItem';

const todoList =[{
  item:'todo',
  done: false,
  id: 695426487923
},{
  item:'todo2',
  done: true,
  id: 85838

}]


function App() {
  return (
    <div className="app">
      <div className='app_container'>
        <div className='app_todoContainer'>
          {
            todoList.map(item=>(
              <TodoItem 
              name={item.item}
              done={item.done}
              id={item.id}/>
            ))
          }
        </div>
      </div>
      <Input/>
    </div>
  );
}

export default App;
