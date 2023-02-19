import React from "react";
import Eye from "./Eye";
import CSS from "csstype";
import Mouth from "./Mouth";

const style: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "2em"
};

interface Props {
  x: Number,
  y: Number
}

function Eyes(props: Props) {
  return (
    <div style={style}>
      <Eye x={props.x} y={props.y} />
      <Mouth />
      <Eye x={props.x} y={props.y} />
    </div>
  );
}

export default Eyes;
