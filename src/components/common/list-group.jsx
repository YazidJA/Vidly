import React from "react";

const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
  } = props;

  return (
    <nav>
      <ul className="list-group" style={{ cursor: "pointer" }}>
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }>
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </nav>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};


export default ListGroup;