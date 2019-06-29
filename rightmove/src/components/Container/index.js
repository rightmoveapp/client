import React from "react";
import './style.css';

const Container = (props) => {
  return <div className="container Content-Container">{props.children}</div>;
}

export default Container;