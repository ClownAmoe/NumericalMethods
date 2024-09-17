import { useState } from "react";
import "./MatrixGaus.css";

function MatrixGaus({ size }) {  // Destructure size from props
  const [inputs, setInputs] = useState(Array(size * size).fill(""));

  const handleChange = (e, row, col) => {
    const newInputs = [...inputs];
    newInputs[row * size + col] = e.target.value;
    setInputs(newInputs);
  };

  const createMtx = () => {
    let matrix = [];
    for (let row = 0; row < size; row++) {
      let rowItems = [];
      for (let col = 0; col < size; col++) {
        rowItems.push(
          <div key={`cell-${row}-${col}`}>
            <label>
              x{col + 1}{row + 1}:
            </label>
            <input
              type="text"
              value={inputs[row * size + col]}
              onChange={(e) => handleChange(e, row, col)}
            />
          </div>
        );
      }
      matrix.push(<div key={`row-${row}`} className="matrix-row">{rowItems}</div>);
    }
    return matrix;
  };

  return (
    <div className="matrix-container">
      {createMtx()}
    </div>
  );
}

export default MatrixGaus;
