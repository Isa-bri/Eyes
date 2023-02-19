import Eyes from "./components/Eyes"

import CSS from "csstype";
import { useState, MouseEvent } from "react";

const style: CSS.Properties = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "lightpink"
};

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e
    setX(clientX/10);
    setY(clientY/5);
  };
  return (
    <div className="App" style={style} onMouseMove={(e) => handleMouseMove(e)}>
      <Eyes x={x} y={y} />
    </div>
  );
}

export default App
