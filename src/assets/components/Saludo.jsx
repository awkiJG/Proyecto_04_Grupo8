import { useState } from "react";

function Saludo() {
  const [nombres, setNombres] = useState([]);
  const [nombreActual, setNombreActual] = useState("");

  const handleInputChange = (e) => {
    setNombreActual(e.target.value);
  };

  const handleAgregarNombre = () => {
    if (nombreActual.trim() !== "") {
      setNombres([...nombres, nombreActual.trim()]);
      setNombreActual("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAgregarNombre();
    }
  };
  return (
    <>
      <input
        type="text"
        value={nombreActual}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Ingresa un nombre"
      />
      <button onClick={handleAgregarNombre}>Agregar</button>
      {nombres.map((n, i) => (
        <h1 key={i}>Hola {n}</h1>
      ))}
    </>
  );
}

export default Saludo;