import React from 'react';

// import './tasks-list-add.scss';

const AddPopup = ({ onClick }) => {
  return (
    <div className="tasks-list__add-popup add-popup">

      <input type="text"
        className="add-popup__input input"
        placeholder="Добавить список"
        autoFocus={true}/>

      <ul className="add-popup__pins">
        <li className="add-popup__pin"><button className="pin pin--active pin--grey">color</button></li>
        <li className="add-popup__pin"><button className="pin pin--green">color</button></li>
        <li className="add-popup__pin"><button className="pin pin--blue">color</button></li>
        <li className="add-popup__pin"><button className="pin pin--pink">color</button></li>
        <li className="add-popup__pin"><button className="pin pin--lime">color</button></li>
        <li className="add-popup__pin"><button className="pin pin--purple">color</button></li>
        <li className="add-popup__pin"><button className="pin pin--black">color</button></li>
        <li className="add-popup__pin"><button className="pin pin--red">color</button></li>
      </ul>
      <button className="add-popup__btn-add btn">Добавить</button>
      <button className="add-popup__btn-closed" onClick={onClick}>Закрыть</button>
    </div>
  );
};

export default AddPopup;
