import React from "react";
import CSS from "csstype";

let style: CSS.Properties = {
  backgroundColor: "black",
  width: "10em",
  height: "10em",
  borderRadius: "50%",
};

interface Props {
  x: Number;
  y: Number;
}

function Pupil(props: Props) {
  const { x, y } = props;
  style = {
    ...style,
    transform: `translate(${x}px, ${y}px)`,
  };
  return <div style={style}></div>;
}

export default Pupil;
