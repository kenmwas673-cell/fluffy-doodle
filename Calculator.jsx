import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = (operator) => {
    if (!operator) {
      setResult("❌ No operator selected");
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("❌ Enter valid numbers");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n2 === 0 ? "❌ Cannot divide by 0" : n1 / n2;
        break;
      default:
        res = "❌ Unknown operator";
    }

    setResult(res);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>React Calculator</h1>

      <div style={inputsContainer}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Number 1"
          style={inputStyle}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Number 2"
          style={inputStyle}
        />
      </div>

      <div style={buttonsContainer}>
        <button style={btnStyle} onClick={() => handleOperation("+")}>+</button>
        <button style={btnStyle} onClick={() => handleOperation("-")}>-</button>
        <button style={btnStyle} onClick={() => handleOperation("*")}>*</button>
        <button style={btnStyle} onClick={() => handleOperation("/")}>/</button>
      </div>

      <h2 style={{ color: "#0066cc" }}>Result: {result}</h2>
    </div>
  );
}

// 🔹 Styles
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "50px",
  fontFamily: "Arial",
};

const titleStyle = {
  marginBottom: "20px",
  color: "#333",
};

const inputsContainer = {
  marginBottom: "15px",
};

const inputStyle = {
  margin: "5px",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonsContainer = {
  marginBottom: "20px",
};

const btnStyle = {
  margin: "5px",
  padding: "10px 20px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};
