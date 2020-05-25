import React, { useState } from 'react';
import TasksList from '../tasks-list/tasks-list';

import './tasks-list-add.scss';
import AddPopup from '../add-popup/add-popup';

const TasksListAdd = ({ items, isRemovable }) => {
  const [popupClose, setPopupClose] = useState(true);

  return (
    <div className="tasks-list__add">
      <TasksList
        items={[{ value: 'Добавить список', type: 'addlist', active: false, }]}
        onClick={() => setPopupClose(!popupClose)}
      />

      <AddPopup
        isHidden={popupClose}
        onClick={() => setPopupClose(true)}
      />
    </div>
  );
};

export default TasksListAdd;
