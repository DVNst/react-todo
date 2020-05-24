import React from 'react';
import List from './components/List/List';

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar sidebar">
        <List
          items = {[{value: 'Все задачи', type: 'title', active: false,}]}
        />

        <List
          items = {[
            {value: 'Покупки', color: 'green', active: false,},
            {value: 'Фронтенд', color: 'blue', active: true,},
            {value: 'Фильмы и сериалы', color: 'pink', active: false,},
            {value: 'Книги', color: 'lightgreen', active: false,},
            {value: 'Личное', color: 'gray', active: false,},
          ]}
        />
      </div>
      <div className="todo__tasks tasks">
        
      </div>
    </div>
  );
}

export default App;
