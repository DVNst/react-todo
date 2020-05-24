import React from 'react';

const List = ({items}) => {
  return (
    <ul className="sidebar__list">
      {
        items.map((item) => (
            <li
              className={
                "sidebar__item" + 
                (item.type ? " sidebar__item--" + item.type : "") + 
                (item.color ? " sidebar__item--" + item.color : "") + 
                (item.active ? " sidebar__item--active" : "")
              }
            >
              {item.value}
              {item.color ? <button className="sidebar__btn">удалить</button> : null}
            </li>
        ))
      }
      
    </ul>
  );
};

export default List;
