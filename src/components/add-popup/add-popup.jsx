import React, { useState, useRef } from 'react';
import axios from 'axios';

// import './tasks-list-add.scss';

const AddPopup = ({ colors, onClickBtnClosed, onClickBtnAdd }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [listName, setListName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const popupInput = useRef(null);

  const handlerBtnAdd = () => {
    if (!listName) {
      popupInput.current.classList.add('input--alert');
      setTimeout(() => popupInput.current.classList.remove('input--alert'), 400);
      popupInput.current.focus();

      return;
    }

    setIsLoading(true);

    axios
      .post('http://localhost:3001/lists', { "name": listName, "colorId": selectedColor, })
      .then(({ data }) => {
        const newListItem = {
          ...data,
          "name": listName,
          "colorId": selectedColor,
          "color": colors.find(color => color.id === selectedColor)
        };
        onClickBtnAdd(newListItem);
      })
      .finally(() => {
        setIsLoading(false);
      }).catch((error) => {
        console.log(error);
      });
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
        ref={popupInput}
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
              <span className="visually-hidden">{color.name}</span>
            </button>
          </li>
        ))}
      </ul>
      <button className="add-popup__btn-add btn" onClick={handlerBtnAdd}>
        {isLoading ? 'Добавление...' : 'Добавить'}
      </button>
      <button className="add-popup__btn-closed" onClick={onClickBtnClosed}>
        <span className="visually-hidden">Закрыть</span>
      </button>
    </div>
  );
};

export default AddPopup;
