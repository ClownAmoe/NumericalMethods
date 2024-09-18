import "./headerGaus.css";
import { useState } from "react";
import MatrixGaus from "./MatrixGaus";

function HeaderGaus() {
  const [inputValue, setInputValue] = useState(''); 
  const [matrixSize, setMatrixSize] = useState(null);  // Initialize matrixSize state

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const sizeNow = parseInt(inputValue, 10);  // Parse input as an integer

    if (!isNaN(sizeNow) && sizeNow > 0) {
      setMatrixSize(sizeNow);  // Set matrix size if input is valid
    } else {
      alert("Please enter a valid number for the matrix size.");
    }
  };

  return (
    <div className="headerGaus">
      <h1>Gauss Method</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter matrix size"
        className="inputSize"
      />
      <button className="confirmSize" onClick={handleSubmit}>
        Submit
      </button>

      {matrixSize && <MatrixGaus size={matrixSize} />}  {/* Render MatrixGaus only if matrixSize is set */}
    </div>
  );
}

export default HeaderGaus;
