import { evaluate, abs } from "mathjs";

function LogicIterative({func, start}) {
    const eps = 1e-6;
    let x = start;
    let xPrev;
    let func1 = "x - " + func;
    const maxIter = 1000;
    let iter = 0;
    do {
        iter++;
        xPrev = x;
        x = evaluate(func1, { x: xPrev });
    } while (abs(x - xPrev) > eps && iter < maxIter);

    return x;
}

export default LogicIterative;
