import React from 'react';

import TaskTodo from '../task-todo/task-todo';
import './task.scss';

const Task = ({ task }) => {
  return (
    <>
      <div className="tasks__title">
        <h2 className="tasks__name">{task.name}</h2>
        <button className="tasks__rename"><span className="visually-hidden">Редактировать</span></button>
      </div>

      {task.tasks && task.tasks.length > 0 &&
        <ul className="tasks__list">
          {task.tasks.map((task, i) => (
            <TaskTodo
              task={task}
              key={"task-" + task.id}
            />
          ))}
        </ul>
      }

      <button className="tasks__btn-add">Новая задача</button>
    </>
  )
};

export default Task;
