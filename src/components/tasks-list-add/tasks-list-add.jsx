import React, { useState } from 'react';
import TasksList from '../tasks-list/tasks-list';

import './tasks-list-add.scss';
import AddPopup from '../add-popup/add-popup';

const TasksListAdd = ({ colors, onClickBtnAdd }) => {
  const [popupClose, setPopupClose] = useState(true);

  const handlerBtnClosed = () => {
    setPopupClose(true);
  }
  
  const handlerClickItem = () => {
    setPopupClose(!popupClose);
  }

  const handlerBtnAdd = (newListItem) => {
    onClickBtnAdd(newListItem);
    setPopupClose(true);
  }

  return (
    <div className="tasks-list__add">
      <TasksList
        items={[{ name: 'Добавить список', id: 'addlist' }]}
        onClickItem={handlerClickItem}
      />

      {!popupClose &&
        <div className="tasks-list__add-popup add-popup">
          <AddPopup
            colors = {colors}
            onClickBtnClosed={handlerBtnClosed}
            onClickBtnAdd={handlerBtnAdd}
          />
        </div>
      }
    </div>
  );
};

export default TasksListAdd;
