import React from 'react';
import TasksItem from '../tasks-item/tasks-item';

import './tasks-list.scss';

const TasksList = ({ items, isRemovable, onClick }) => {
  return (
    <ul className="tasks-list__list">
      {items.map((item, i) => (
        <TasksItem
          item={item}
          isRemovable={isRemovable}
          onClick={onClick}
          key={item.id ? item.id : item.name}
        />
      ))
      }
    </ul>
  );
};

export default TasksList;
