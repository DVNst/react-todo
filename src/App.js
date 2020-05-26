import React, { useState } from 'react';
import TasksList from './components/tasks-list/tasks-list';
import TasksListAdd from './components/tasks-list-add/tasks-list-add';

import DB from './assets/db.json';

function App() {
  const colors = DB.colors;

  let initialStateItems = DB.lists.map(item => ({...item, "color": colors.find(color => color.id === item.colorId).name}));
  const [items, setItems] = useState(initialStateItems);

  let ids = items.map(item => item.id);
  let itemsEndId = ids.length > 0 ? Math.max(...ids) : 0;

  const handlerBtnAdd = (newListItem) => {
    newListItem.id = itemsEndId + 1;
    setItems([...items, newListItem]);
  }

  return (
    <div className="todo">
      <div className="todo__sidebar task-list">
        <TasksList
          items={[{ name: 'Все задачи', type: 'title', active: false, }]}
        />

        <TasksList
          items={items}
          isRemovable={true}
        />

        <TasksListAdd
          colors={colors}
          onClickBtnAdd={handlerBtnAdd}
        />
      </div>

      <div className="todo__tasks tasks"></div>
    </div>
  );
}

export default App;
