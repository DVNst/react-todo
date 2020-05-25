import React from 'react';

import './tasks-item.scss'

const TasksItem = ({ item, isRemovable, onClick }) => {
  return (
    <li
      className={
        "tasks-list__item" +
        (item.type ? " tasks-list__item--" + item.type : "") +
        (item.color ? " tasks-list__item--" + item.color : "") +
        (item.active ? " tasks-list__item--active" : "")
      }
      onClick={onClick}
    >
      {item.value}
      {isRemovable && <button className="tasks-list__btn-remove">удалить</button>}
    </li>
  );
};

export default TasksItem;
