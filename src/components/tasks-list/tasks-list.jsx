import React from 'react';
import TasksItem from '../tasks-item/tasks-item';

import './tasks-list.scss';

const TasksList = ({ items, itemsActive, isRemovable, onClickItem, onClickRemoveItem }) => {
  return (
    <ul className="tasks-list__list">
      {items.map((item, i) => (
        <TasksItem
          item={item}
          itemsActive={itemsActive}
          isRemovable={isRemovable}
          key={item.id ? item.id : item.name}
          onClickItem = {onClickItem}
          onClickRemoveItem = {onClickRemoveItem}
        />
      ))
      }
    </ul>
  );
};

export default TasksList;
