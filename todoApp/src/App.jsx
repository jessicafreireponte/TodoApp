import { useState } from "react";
import { HeaderComponent } from "./Components/Header/HeaderComponent";
import "./App.css";
import { ContentComponent } from "./Components/Content/ContentComponent";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("");

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <>
      <div className={`container ${backgroundColor}`}>
        <main>
          <HeaderComponent changeBackgroundColor={changeBackgroundColor} />
          <ContentComponent />
          <footer>
            <ul>
              <li>nº item</li>
              <li>all</li>
              <li>active</li>
              <li>complete</li>
              <li>clear complete</li>
            </ul>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
