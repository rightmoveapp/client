import React from "react";

const Col = props => {
  const { size, colNum } = props.col;
  return (
  <div className={ `col ${size}${colNum}` } />
  )
}

export default Col;
