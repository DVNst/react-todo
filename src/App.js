import React from 'react';
import TasksList from './components/tasks-list/tasks-list';
import TasksListAdd from './components/tasks-list-add/tasks-list-add';

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar task-list">
        <TasksList
          items={[{ value: 'Все задачи', type: 'title', active: false, }]}
        />

        <TasksList
          items={[
            { value: 'Покупки', color: 'green', active: false, },
            { value: 'Фронтенд', color: 'blue', active: true, },
            { value: 'Фильмы и сериалы', color: 'pink', active: false, },
            { value: 'Книги', color: 'lime', active: false, },
            { value: 'Личное', color: 'gray', active: false, },
          ]}
          isRemovable={true}
        />

        <TasksListAdd />
      </div>

      <div className="todo__tasks tasks"></div>
    </div>
  );
}

export default App;
