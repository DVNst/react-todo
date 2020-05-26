import React, { useState } from 'react';
import TasksList from './components/tasks-list/tasks-list';
import TasksListAdd from './components/tasks-list-add/tasks-list-add';

import DB from './assets/db.json';

function App() {
  const colors = DB.colors;

  let initialStateItems = DB.lists.map(item => ({ ...item, "color": colors.find(color => color.id === item.colorId).name }));
  const [items, setItems] = useState(initialStateItems);

  const [itemsActive, setItemsActive] = useState('title');

  let ids = items.map(item => item.id);
  let itemsEndId = ids.length > 0 ? Math.max(...ids) : 0;

  const handlerBtnAdd = (newListItem) => {
    newListItem.id = itemsEndId + 1;
    setItems([...items, newListItem]);
  }

  const handlerClickRemoveItem = (itemID) => {
    if (itemsActive === itemID) setItemsActive('title');

    setItems(items.filter((item) => item.id !== itemID));
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
          <div className="tasks__title">
            <h2 className="tasks__name">Фронтенд</h2>
            <button className="tasks__rename"><span className="visually-hidden">Редактировать</span></button>
          </div>

          <ul className="tasks__list">
            <li className="tasks__item">
              <label>
                <input type="checkbox" />
              Изучить JavaScript
              <button className="tasks__btn-remove"><span className="visually-hidden">Удалить</span></button>
              </label>
            </li>
            <li className="tasks__item">
              <label>
                <input type="checkbox" />
              Изучить паттерны проектирования
              <button className="tasks__btn-remove"><span className="visually-hidden">Удалить</span></button>
              </label>
            </li>
            <li className="tasks__item">
              <label>
                <input type="checkbox" checked />
              ReactJS Hooks (useState, useReducer, useEffect и т.д.)
              <button className="tasks__btn-remove"><span className="visually-hidden">Удалить</span></button>
              </label>
            </li>
            <li className="tasks__item">
              <label>
                <input type="checkbox" checked disabled />
              Redux (redux-observable, redux-saga)
              <button className="tasks__btn-remove"><span className="visually-hidden">Удалить</span></button>
              </label>
            </li>
          </ul>
          <button className="tasks__btn-add">Новая задача</button>
        </div>
      </div>
    </>
  );
}

export default App;
