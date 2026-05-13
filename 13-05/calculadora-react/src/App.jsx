import { useState } from "react";

function App() {

  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  // FUNCIONES
  function sumar(a, b) {
    return a + b;
  }

  function restar(a, b) {
    return a - b;
  }

  function multiplicar(a, b) {
    return a * b;
  }

  function dividir(a, b) {
    if (b === 0) return "No se puede dividir por cero.";
    return a / b;
  }

  // EVENTOS
  function handleSuma() {
    setResultado(sumar(Number(numero1), Number(numero2)));
  }

  function handleResta() {
    setResultado(restar(Number(numero1), Number(numero2)));
  }

  function handleMultiplicacion() {
    setResultado(multiplicar(Number(numero1), Number(numero2)));
  }

  function handleDivision() {
    setResultado(dividir(Number(numero1), Number(numero2)));
  }

  function handleLimpiar() {
    setNumero1("");
    setNumero2("");
    setResultado("");
  }

  // ESTILOS
  const container = {
    padding: "40px",
    fontFamily: "Arial",
    background: "#f4f6f8",
    minHeight: "100vh",
    textAlign: "center"
  };

  const input = {
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "200px"
  };

  const button = {
    padding: "10px 15px",
    margin: "8px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    fontWeight: "bold"
  };

  const buttonHover = {
    transform: "scale(1.05)"
  };

  const result = {
    marginTop: "20px",
    padding: "15px",
    background: "#fff",
    borderRadius: "10px",
    border: "1px solid #ddd",
    display: "inline-block",
    minWidth: "200px"
  };

  return (
    <div style={container}>
      <h1>Calculadora React</h1>

      <input
        style={input}
        type="number"
        placeholder="Número 1"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />

      <input
        style={input}
        type="number"
        placeholder="Número 2"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />

      <br />

      <button style={button} onClick={handleSuma}>Sumar</button>
      <button style={button} onClick={handleResta}>Restar</button>
      <button style={button} onClick={handleMultiplicacion}>Multiplicar</button>
      <button style={button} onClick={handleDivision}>Dividir</button>
      <button style={{ ...button, backgroundColor: "#f44336" }} onClick={handleLimpiar}>
        Limpiar
      </button>

      <div style={result}>
        <h2>Resultado: {resultado}</h2>
      </div>
    </div>
  );
}

export default App;