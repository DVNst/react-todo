import React from 'react';

import './tasks-item.scss'

const TasksItem = ({ item, itemIdActive, isRemovable, onClickItem, onClickRemoveItem }) => {

  const handlerClickRemoveItem = (evt) => {
    evt.stopPropagation();
    onClickRemoveItem(item.id);
  }

  return (
    <li
      className={
        "tasks-list__item" +
        (typeof (item.id) === 'string' ? " tasks-list__item--" + item.id : "") +
        (item.color ? " tasks-list__item--" + item.color.name : "") +
        (itemIdActive === item.id ? " tasks-list__item--active" : "")
      }
      tabIndex={1}
      onClick={() => onClickItem(item)}
    >
      {item.name}
      {item.tasks ?
        <span className="tasks-list__count">{` (${item.tasks.length})`}</span>
        : null
      }

      {isRemovable &&
        <button
          className="tasks-list__btn-remove"
          onClick={handlerClickRemoveItem}
          tabIndex={2}
        >
          <span className="visually-hidden">Удалить</span>
        </button>
      }
    </li >
  );
};

export default TasksItem;
