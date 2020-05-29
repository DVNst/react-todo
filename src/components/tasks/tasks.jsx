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
          <input id="check1" type="checkbox" className="tasks__checkbox" />
          <label htmlFor="check1" className="tasks__item-name" >
            Изучить JavaScript
          </label>
          <button className="tasks__btn-remove"><span className="visually-hidden">Удалить</span></button>
        </li>
        <li className="tasks__item">
          <input id="check2" type="checkbox" className="tasks__checkbox" />
          <label htmlFor="check2" className="tasks__item-name" >
            Изучить паттерны проектирования
          </label>
          <button className="tasks__btn-remove"><span className="visually-hidden">Удалить</span></button>
        </li>
        <li className="tasks__item">
          <input id="check3" type="checkbox" className="tasks__checkbox" checked />
          <label htmlFor="check3" className="tasks__item-name" >
            ReactJS Hooks (useState, useReducer, useEffect и т.д.)
          </label>
          <button className="tasks__btn-remove"><span className="visually-hidden">Удалить</span></button>
        </li>
        <li className="tasks__item">
          <input id="check4" type="checkbox" className="tasks__checkbox" checked disabled />
          <label htmlFor="check4" className="tasks__item-name" >
            Redux (redux-observable, redux-saga)
          </label>
          <button className="tasks__btn-remove"><span className="visually-hidden">Удалить</span></button>
        </li>
      </ul>
      <button className="tasks__btn-add">Новая задача</button>
    </>
  )
};

export default Tasks;
