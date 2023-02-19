import React from 'react'
import CSS from 'csstype'

interface Props {
  children: React.ReactNode;
}

const style: CSS.Properties = {
  backgroundColor: "aliceblue",
  width: "20em",
  height: "20em",
  borderRadius: "50%",
  border: "0.5em solid black",
  padding: "3em"
};

function Cornea(props: Props) {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

export default Cornea