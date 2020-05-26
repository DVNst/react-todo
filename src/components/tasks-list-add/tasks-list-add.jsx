import React, { useState } from 'react';
import TasksList from '../tasks-list/tasks-list';

import './tasks-list-add.scss';
import AddPopup from '../add-popup/add-popup';

const TasksListAdd = ({ colors, onClickBtnAdd }) => {
  const [popupClose, setPopupClose] = useState(true);

  const handlerBtnClosed = () => {
    setPopupClose(true);
  }

  const handlerBtnAdd = (newListItem) => {
    onClickBtnAdd(newListItem);
    setPopupClose(true);
  }

  return (
    <div className="tasks-list__add">
      <TasksList
        items={[{ name: 'Добавить список', type: 'addlist', active: false, }]}
        onClick={() => setPopupClose(!popupClose)}
      />

      {!popupClose &&
        <AddPopup
          colors = {colors}
          onClickBtnClosed={handlerBtnClosed}
          onClickBtnAdd={handlerBtnAdd}
        />
      }
    </div>
  );
};

export default TasksListAdd;
