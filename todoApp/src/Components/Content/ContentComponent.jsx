import { useState } from "react";
import "./Content.css";

export const ContentComponent = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const inputValue = e.target.value.trim();
      if (inputValue !== "") {
        setError(false);
        setList([...list, inputValue]);
        setCheckboxStates([...checkboxStates, false]); // Agregar estado inicial del checkbox para el nuevo elemento
        e.target.value = "";
      } else {
        setError(true);
      }
    }
  };

  const handleCheck = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  return (
    <main className="containerList">
      <form>
        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <input
          type="text"
          placeholder="Crear una nueva tarea..."
          name="todoInput"
          onKeyDown={handleKeyDown}
        />
      </form>
      <p className={`error ${error && "visible"}`}>
        Debes introducir una tarea primero :)
      </p>
      <ul className="listUl">
        {list.map((todo, index) => (
          <li key={index} className="checkboxList">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={checkboxStates[index]}
                onChange={() => handleCheck(index)}
              />
              <span className="checkmark"></span>
            </label>
            <span
              style={{
                textDecoration: checkboxStates[index] ? "line-through" : "none",
              }}
            >
              {todo}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};
