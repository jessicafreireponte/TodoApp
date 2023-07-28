import { useState } from "react";
import { HeaderComponent } from "./Components/Header/HeaderComponent";
import "./App.css";
import { ContentComponent } from "./Components/Content/ContentComponent";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [clear, setClear] = useState();

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  const ClearComplets = (clearList) => {
    setClear(clearList);
  };

  return (
    <>
      <div className={`container ${backgroundColor}`}>
        <main>
          <HeaderComponent changeBackgroundColor={changeBackgroundColor} />
          <ContentComponent clear={clear} />
          <footer>
            <ul>
              <li>nº item</li>
              <li>all</li>
              <li>active</li>
              <li>complete</li>
              <li onClick={() => setClear(!clear)}>clear complete</li>
            </ul>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
