import React, { useState } from 'react';
import axios from 'axios';

import './task-todo.scss';

const TaskTodo = ({ task, onClickRemoveTodo }) => {
  const [checked, setChecked] = useState(task.completed);

  const handlerChange = () => {
    setChecked(!checked);
  }

  const handlerRemoveTodo = () => {
    axios
    .delete('http://localhost:3001/tasks/' + task.id)
    .then(() => {
      onClickRemoveTodo(task);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <li className="tasks__item">
      <input
        className="tasks__checkbox"
        id={"task-" + task.id}
        type="checkbox"
        checked={checked}
        disabled={task.disabled}
        onChange={handlerChange}
      />
      <label htmlFor={"task-" + task.id} className="tasks__item-name" >
        {task.text}
      </label>
      <button className="tasks__btn-remove" onClick={handlerRemoveTodo}><span className="visually-hidden">Удалить</span></button>
    </li>
  )
};

export default TaskTodo;
