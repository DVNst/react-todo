import React, { useState } from 'react';

// import './tasks-list-add.scss';

const AddPopup = ({ colors, onClickBtnClosed, onClickBtnAdd }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [listName, setListName] = useState("");

  const handlerBtnAdd = () => {
    const newListItem = {
      "name": listName,
      "colorId": selectedColor,
      "color" : colors.find(color => color.id === selectedColor).name
    }
    onClickBtnAdd(newListItem);
  }

  const handlerInputChange = (evt) => {
    setListName(evt.target.value);
  }

  return (
    <div className="tasks-list__add-popup add-popup">

      <input
        type="text"
        className="add-popup__input input"
        placeholder="Добавить список"
        autoFocus={true}
        onChange={(evt) => handlerInputChange(evt)}
      />

      <ul className="add-popup__pins">
        {colors.map((color, i) => (
          <li className="add-popup__pin" key={color.id}>
            <button
              className={
                "pin pin--" + color.name +
                ((color.id === selectedColor) ? " pin--active" : "")
              }
              onClick={() => setSelectedColor(color.id)}
            >
              {color.name}
            </button>
          </li>
        ))}
      </ul>
      <button className="add-popup__btn-add btn" onClick={handlerBtnAdd}>Добавить</button>
      <button className="add-popup__btn-closed" onClick={onClickBtnClosed}>Закрыть</button>
    </div>
  );
};

export default AddPopup;
