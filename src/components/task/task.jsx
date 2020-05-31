import React, { useState } from 'react';

import './task.scss';

const Task = ({ task }) => {
  const [checked, setChecked] = useState(task.completed);

  const handleChange = () => {
    setChecked(!checked);
  }

  return (
    <li className="tasks__item">
      <input
        className="tasks__checkbox"
        id={"task-" + task.id}
        type="checkbox"
        checked={checked}
        disabled={task.disabled}
        onChange={handleChange}
      />
      <label htmlFor={"task-" + task.id} className="tasks__item-name" >
        {task.text}
      </label>
      <button className="tasks__btn-remove"><span className="visually-hidden">Удалить</span></button>
    </li>
  )
};

export default Task;
