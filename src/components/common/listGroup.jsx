import React, { Component } from "react";

const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
  } = props;

  return (
    <ul className="list-group">
      {items.map((i) => (
        <li
          onClick={() => onItemSelect(i)}
          className={
            i === selectedItem ? "list-group-item active" : "list-group-item"
          }
          key={i[valueProperty]}
        >
          {i[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
