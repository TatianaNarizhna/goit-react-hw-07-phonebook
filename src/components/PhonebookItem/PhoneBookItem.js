import React from "react";
import PropTypes from "prop-types";
import s from "./BookItem.module.css";

const PhoneListItem = ({ id, name, number, onDeleteList }) => {
  return (
    <li className={s.list} key={id}>
      <p>{name}:</p>
      <p>{number}</p>
      <div className={s.buttonList}>
      <button className={s.button} onClick={() => onDeleteList(id)}>
        Delete
      </button>
      </div>
    
    </li>
  );
};

PhoneListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteList: PropTypes.func.isRequired,
};

export default PhoneListItem;
