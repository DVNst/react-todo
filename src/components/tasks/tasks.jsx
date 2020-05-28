import React from 'react';

import './tasks.scss';

const Tasks = () => {
  return (
    <>
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
    </>
  )
};

export default Tasks;
