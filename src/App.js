import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TasksList from './components/tasks-list/tasks-list';
import TasksListAdd from './components/tasks-list-add/tasks-list-add';
import Tasks from './components/tasks/tasks';

// import DB from './assets/db.json';

function App() {
  const [colors, setColors] = useState([]);
  const [items, setItems] = useState([]);
  const [itemsActive, setItemsActive] = useState('title');

  useEffect(() => {
    axios.get('http://localhost:3001/lists/?_expand=color').then(({ data }) => {
      setItems(data);
    });

    axios.get('http://localhost:3001/colors/').then(({ data }) => {
      setColors(data);
    });
  }, []);

  const handlerBtnAdd = (newListItem) => {
    setItems([...items, newListItem]);
  }

  const handlerClickRemoveItem = (itemID) => {
    if (itemsActive === itemID) setItemsActive('title');

    axios
      .delete('http://localhost:3001/lists/' + itemID)
      .then(() => {
        setItems(items.filter((item) => item.id !== itemID));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handlerClickItem = (itemID) => {
    setItemsActive(itemID);
  }

  return (
    <>
      <h1 className="todo__title visually-hidden">To-do</h1>
      <div className="todo">
        <div className="todo__sidebar task-list">
          <TasksList
            items={[{ name: 'Все задачи', id: 'title' }]}
            itemsActive={itemsActive}
            onClickItem={handlerClickItem}
          />

          <TasksList
            items={items}
            itemsActive={itemsActive}
            isRemovable={true}
            onClickRemoveItem={handlerClickRemoveItem}
            onClickItem={handlerClickItem}
          />

          <TasksListAdd
            colors={colors}
            onClickBtnAdd={handlerBtnAdd}
          />
        </div>

        <div className="todo__tasks tasks">
          <Tasks />
        </div>
      </div>
    </>
  );
}

export default App;
