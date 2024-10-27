function LogicInterpolation({xVals, yVals, x}) {
  let res = 0;
  let temp;
  const n = xVals.length;

  for (let i = 0; i < n; ++i) {
    temp = yVals[i];
    for (let j = 0; j < n; ++j) {
      if (i != j) {
        temp *= (x - xVals[j]) / (xVals[i] - xVals[j]);
      }
    }
    res += temp;
  }

  return res;
}

export default LogicInterpolation;
