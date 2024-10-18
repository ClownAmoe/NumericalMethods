import { evaluate, abs } from "mathjs";

function LogicIterative({func, start}) {
    const eps = 1e-6;
    let x = start;
    let xPrev;
    const maxIter = 1000;
    let iter = 0;
    do {
        iter++;
        xPrev = x;
        x = evaluate(func, { x: xPrev });
    } while (abs(x - xPrev) > eps && iter < maxIter);

    return x;
}

export default LogicIterative;
