import React from "react";

// This is a functional (function) stateless component
// We don't use .this in functions, we pass props instead as argument

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return <i onClick={props.onClick} className={classes} style={{ cursor: "pointer" }} />;
};

export default Like;
