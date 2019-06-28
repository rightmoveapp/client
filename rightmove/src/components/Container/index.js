import React from "react";
import './style.css';

const Container = (props) => {
  return <div className="Content-Container">{props.children}</div>;
}

export default Container;