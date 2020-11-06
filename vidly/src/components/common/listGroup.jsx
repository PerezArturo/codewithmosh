import React from "react";
import { List, ListItem } from "@material-ui/core";

const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
  } = props;

  return (
    <List component="nav" disablePadding={false} dense={false}>
      {items.map((item) => (
        <ListItem
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          divider={true}
          disableGutters={false}
          dense={false}
          selected={item === selectedItem ? true : false}>
          {item[textProperty]}
        </ListItem>
      ))}
    </List>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
