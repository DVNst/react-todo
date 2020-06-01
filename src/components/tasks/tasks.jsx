import React from 'react';

import Task from '../task/task';
import './tasks.scss';

const Tasks = ({ itemsActive }) => {
  
  return (
    <>
      {(!itemsActive) &&
        <h2 className="tasks__empty">Задачи отсутствуют</h2>
      }

      {(itemsActive && Array.isArray(itemsActive)) &&
        itemsActive.map((item) => (
          < Task
            task={item}
            key={`tasks-title-${item.id}`}
          />
        ))
      }
    </>
  )
};

export default Tasks;
