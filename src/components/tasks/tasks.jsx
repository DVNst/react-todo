import React from 'react';

import Task from '../task/task';
import './tasks.scss';

const Tasks = ({ itemsActive, onClickBtnAddTodo, onClickRemoveTodo }) => {
  return (
    <>
      {(!itemsActive) &&
        <h2 className="tasks__empty">Задачи отсутствуют</h2>
      }

      {(itemsActive && Array.isArray(itemsActive)) &&
        itemsActive.map((item) => (
          < Task
            task={item}
            withEmpty={itemsActive.length === 1}
            onClickBtnAddTodo={onClickBtnAddTodo}
            onClickRemoveTodo={onClickRemoveTodo}
            key={`tasks-title-${item.id}`}
          />
        ))
      }
    </>
  )
};

export default Tasks;
