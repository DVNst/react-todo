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
  const [itemIdActive, setitemIdActive] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/lists/?_expand=color&_embed=tasks').then(({ data }) => {
      setItems(data);
      setItemsActive(data);
      setitemIdActive("title");
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

  const handlerBtnAddTodo = (newTodo) => {
    const newList = items.map((item) => {
      if (item.id === newTodo.listId) {
        item.tasks = [...item.tasks, newTodo]
      }

      return item;
    });

    setItems(newList);
  }

  const handlerClickRemoveItem = (itemId) => {
    axios
      .delete('http://localhost:3001/lists/' + itemId)
      .then(() => {
        setItems(items.filter((item) => item.id !== itemId));
      })
      .catch((error) => {
        console.log(error);
      });

    if (itemIdActive === itemId) {
      handlerClickItemAll();
    };
  }

  const handlerRemoveTodo = (todo) => {
    const newList = items.map((item) => {
      if (item.id === todo.listId) {
        item.tasks = item.tasks.filter((task) => task.id !== todo.id);
      }
      return item;
    });

    setItems(newList);
  }

  const handlerClickItem = (item) => {
    setItemsActive([item]);
    setitemIdActive(item.id);
  }

  const handlerClickItemAll = () => {
    setItemsActive(items);
    setitemIdActive("title");
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

          {colors &&
            <TasksListAdd
              colors={colors}
              onClickBtnAdd={handlerBtnAdd}
            />
          }
        </div>

        <div className="todo__tasks tasks">
          {(setItemsActive) &&
            <Tasks
              itemsActive={itemsActive}
              onClickBtnAddTodo={handlerBtnAddTodo}
              onClickRemoveTodo={handlerRemoveTodo}
            />}
        </div>
      </div>
    </>
  );
}

export default App;
