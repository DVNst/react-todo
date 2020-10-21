import React, { useState, useRef } from 'react';
import axios from 'axios';

import TaskTodo from '../task-todo/task-todo';
import './task.scss';

const Task = ({ task, withEmpty, onClickBtnAddTodo, onClickRemoveTodo }) => {
  const [formAddClose, setFormAddClose] = useState(true);
  const [taskName, setTaskName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const popupInput = useRef(null);

  const handlerBtnNewTask = () => {
    setFormAddClose(false);
  }

  const toggleFormVisible = () => {
    setFormAddClose(!formAddClose);
  }

  const handlerBtnAdd = () => {
    if (!taskName) {
      popupInput.current.classList.add('input--alert');
      setTimeout(() => popupInput.current.classList.remove('input--alert'), 400);
      popupInput.current.focus();

      return;
    }

    setIsLoading(true);

    axios
      .post('http://localhost:3001/tasks', {
        "listId": task.id,
        "text": taskName,
        "completed": false,
      })
      .then(({ data }) => {
        onClickBtnAddTodo(data);
      })
      .finally(() => {
        setIsLoading(false);
      }).catch((error) => {
        console.log(error);
      });

    setTaskName('');
    toggleFormVisible();
  }

  const handlerInputChange = (evt) => {
    setTaskName(evt.target.value);
  }

  return (
    <>
      <div className="tasks__title">
        <h2 className={"tasks__name tasks__name--" + task.color.name}>
          {task.name}
        </h2>
        <button className="tasks__rename"><span className="visually-hidden">Редактировать</span></button>
      </div>

      {withEmpty && task.tasks.length === 0 &&
        <h2 className="tasks__empty">Задачи отсутствуют</h2>
      }

      {task.tasks && task.tasks.length > 0 &&
        <ul className="tasks__list">
          {task.tasks.map((task, i) => (
            <TaskTodo
              task={task}
              onClickRemoveTodo={onClickRemoveTodo}
              key={"task-" + task.id}
            />
          ))}
        </ul>
      }

      <div className="tasks__new-task">
        {formAddClose &&
          <button
            className="tasks__btn-new"
            onClick={handlerBtnNewTask}
          >
            Новая задача
          </button>
        }

        {!formAddClose &&
          <>
            <input
              type="text"
              className="input tasks__input"
              placeholder="Текст задачи"
              autoFocus={true}
              ref={popupInput}
              onChange={(evt) => handlerInputChange(evt)}
              value={taskName}
            />

            <button className="btn tasks__btn tasks__btn--add" onClick={handlerBtnAdd}>
              {isLoading ? 'Добавление...' : 'Добавить задачу'}
            </button>
            <button className="btn btn--gray tasks__btn tasks__btn--cancel " onClick={toggleFormVisible}>
              Отмена
            </button>

          </>
        }
      </div>
    </>
  )
};

export default Task;
