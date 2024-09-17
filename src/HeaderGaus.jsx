import "./headerGaus.css";
import { useState } from "react";
import MatrixGaus from "./MatrixGaus";

function HeaderGaus() {
  const [inputValue, setInputValue] = useState('');  // Input field state
  const [matrixSize, setMatrixSize] = useState(null); // Matrix size state to control rendering

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update input value
  };

  const handleSubmit = () => {
    const sizeNow = parseInt(inputValue); // Parse input value to integer

    if (!isNaN(sizeNow) && sizeNow > 0) {
      setMatrixSize(sizeNow); // Update state to render the matrix
    } else {
      alert("Please enter a valid number for the matrix size."); // Handle invalid input
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
      />
      <button className="confirmSize" onClick={handleSubmit}>
        Submit
      </button>

      {/* Conditionally render MatrixGaus if matrixSize is valid */}
      {<MatrixGaus size={matrixSize} />}
    </div>
  );
}

export default HeaderGaus;
