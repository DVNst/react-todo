import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TasksList from './components/tasks-list/tasks-list';
import TasksListAdd from './components/tasks-list-add/tasks-list-add';
import Tasks from './components/tasks/tasks';

// import DB from './assets/db.json';

function App() {
  const [colors, setColors] = useState(null);
  const [items, setItems] = useState(null);
  const [itemsActive, setItemsActive] = useState(null);
  const [itemIdActive, setItemIdActive] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/lists/?_expand=color&_embed=tasks').then(({ data }) => {
      setItems(data);
      setItemsActive(data);
      setItemIdActive("title");
    });

    axios.get('http://localhost:3001/colors/').then(({ data }) => {
      setColors(data);
    });
  }, []);

  const handlerBtnAdd = (newListItem) => {
    setItems([...items, newListItem]);

    if (itemIdActive === "title") {
      setItemsActive(items);
    };

  }

  const handlerClickRemoveItem = (itemID) => {
    if (itemIdActive === itemID) setItemIdActive("title");

    axios
      .delete('http://localhost:3001/lists/' + itemID)
      .then(() => {
        setItems(items.filter((item) => item.id !== itemID));
      })
      .catch((error) => {
        console.log(error);
      });

    if (itemIdActive === "title") {
      setItemsActive(items);
    };
  }

  const handlerClickItem = (item) => {
    setItemsActive([item]);
    setItemIdActive(item.id);
  }

  const handlerClickItemAll = (item) => {
    setItemsActive(items);
    setItemIdActive("title");
  }

  return (
    <>
      <h1 className="todo__title visually-hidden">To-do</h1>
      <div className="todo">
        <div className="todo__sidebar task-list">
          {itemsActive &&
            <TasksList
              items={[{ name: 'Все задачи', id: 'title' }]}
              itemIdActive={itemIdActive}
              onClickItem={handlerClickItemAll}
            />
          }

          {items &&
            <TasksList
              items={items}
              itemIdActive={itemIdActive}
              isRemovable={true}
              onClickRemoveItem={handlerClickRemoveItem}
              onClickItem={handlerClickItem}
            />
          }

          {colors && <TasksListAdd
            colors={colors}
            onClickBtnAdd={handlerBtnAdd}
          />}
        </div>

        <div className="todo__tasks tasks">
          {(setItemsActive) && <Tasks itemsActive={itemsActive} />}
        </div>
      </div>
    </>
  );
}

export default App;
