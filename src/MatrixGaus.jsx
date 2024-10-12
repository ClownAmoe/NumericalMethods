import "./MatrixGaus.css";
import { useState, useEffect } from "react";

const generateMatrix = (size) => {
  return Array.from({ length: size }, () =>
    Array.from({ length: size + 1 }, () => "")
  );
};

const GausLogic = (mtx, size) => {
  for (let i = 0; i < size; ++i) {

    for (let k = i + 1; k < size; ++k) {
      const factor = mtx[k][i] / mtx[i][i];
      for (let j = i; j < size + 1; ++j) {
        mtx[k][j] -= factor * mtx[i][j];
      }
    }
  }

  const result = Array(size).fill(0);
  for (let i = size - 1; i >= 0; --i) {
    result[i] = mtx[i][size] / mtx[i][i];
    for (let k = 0; k < i; ++k) {
      mtx[k][size] -= mtx[k][i] * result[i];
    }
  }

  return result;
};

function MatrixGaus({ size }) {
  const [matrix, setMatrix] = useState(generateMatrix(size)); 
  const [result, setResult] = useState([]);

  useEffect(() => {
    setMatrix(generateMatrix(size));
  }, [size]);

  
  useEffect(() => {
    setMatrix(generateMatrix(size));
  }, [size]);

  const handleInputChange = (rowIndex, colIndex, event) => {
    const newMatrix = matrix.map((row, rIndex) =>
      row.map((cell, cIndex) =>
        rIndex === rowIndex && cIndex === colIndex ? event.target.value : cell
      )
    );
    setMatrix(newMatrix); 
  };

  const handleSolve = () => {
    try {
      const size = matrix.length;
      if (size === 0) {
        alert("Matrix is empty. Please enter matrix values.");
        return;
      }
      const mtxCopy = matrix.map(row => row.map(cell => parseFloat(cell) || 0));
      const solution = GausLogic(mtxCopy, size);
      setResult(solution);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="matrixGaus">
      <h1>Enter the matrix</h1>
      <table className="matrixTable">
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  {colIndex < size ? (
                    <>
                      <label>  x{colIndex + 1}:  </label>
                      <input
                        type="text"
                        value={cell}
                        onChange={(event) => handleInputChange(rowIndex, colIndex, event)}
                      />
                    </>
                  ) : (
                    <>
                      <label>b{rowIndex + 1}:</label>
                      <input
                        type="text"
                        value={cell}
                        onChange={(event) => handleInputChange(rowIndex, colIndex, event)}
                      />
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="res">
      <button onClick={handleSolve} className="solveBtn">Solve</button>
      {result.length > 0 && (
        <div className="result">
          <h2>Solution:</h2>
            {result.map((value, index) => (
              <div className="xs">
              <a key={index}>x{index + 1} = {value.toFixed(2)}</a>
              </div>
            ))}
        </div>
      )}
        </div>
    </div>
  );
}

export default MatrixGaus;
