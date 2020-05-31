import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Task from '../task/task';
import './tasks.scss';

const Tasks = () => {
  const [todo, setTodo] = useState({ "tasks": [] });

  useEffect(() => {
    axios.get('http://localhost:3001/lists/?id=2&_embed=tasks').then(({ data }) => {
      setTodo(data[0]);
    });
  }, []);

  return (
    <>
      <div className="tasks__title">
        <h2 className="tasks__name">{todo.name}</h2>
        <button className="tasks__rename"><span className="visually-hidden">Редактировать</span></button>
      </div>

      <ul className="tasks__list">
        {todo.tasks.map((task, i) => (
          <Task
            task={task}
            key={"task-" + task.id}
          />
        ))}
      </ul>
      <button className="tasks__btn-add">Новая задача</button>
    </>
  )
};

export default Tasks;
