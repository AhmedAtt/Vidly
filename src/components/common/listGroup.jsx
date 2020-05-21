import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem,
}) => {
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
