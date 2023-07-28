import React, { useState } from "react";
import "./Content.css";

export const ContentComponent = ({ clear }) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState([]);
  const [set, setSet] = useState(clear);

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

  const handleClearCompleted = () => {
    if (clear) {
      console.log("oli");
      const newList = list.filter((_, index) => !checkboxStates[index]);
      setList(newList);
    }

    const newCheckboxStates = checkboxStates.filter(
      (_, index) => !checkboxStates[index]
    );
    setCheckboxStates(newCheckboxStates);
  };

  const filteredList = clear
    ? list.filter((_, index) => !checkboxStates[index]) // Filtrar tareas completadas si clear es verdadero
    : list; // Mostrar todas las tareas si clear es falso

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
        {filteredList.map((todo, index) => (
          <li key={index} className="checkboxList">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={checkboxStates[index]}
                onChange={() => handleCheck(index)}
                onClick={handleClearCompleted}
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
