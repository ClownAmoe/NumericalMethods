function LogicInterNew({xVals, yVals, x}) {
    let n = xVals.length;

    function f(xVals, yVals, i, j) {
        if (i === j) {
            return yVals[i];
        }
        return (f(xVals, yVals, i + 1, j) - f(xVals, yVals, i, j - 1)) / (xVals[j] - xVals[i]);
    }

    let res = yVals[0];
    let term;

    for (let i = 1; i < n; i++) {
        term = f(xVals, yVals, 0, i);

        for (let j = 0; j < i; j++) {
            term *= (x - xVals[j]);
        }

        res += term;
    }

    return res;
}

export default LogicInterNew;
