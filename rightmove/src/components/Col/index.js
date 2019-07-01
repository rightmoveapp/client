import React from "react";

const Col = props => {
  const size =  props.size;
  return (
  <div className={ `col ${size}` }>{props.children}</div>
  )
}

export default Col;
