import { useState } from "react";
import "./Header.css";

export const HeaderComponent = ({ changeBackgroundColor }) => {
  //Cuando es false quiere decir que es modo día
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode(!mode);
    return changeBackgroundColor(mode ? "white" : "black");
  };

  return (
    <header>
      <h1>TODO</h1>
      <button onClick={handleMode}>{mode ? "☀️" : "🌙"} </button>
    </header>
  );
};
