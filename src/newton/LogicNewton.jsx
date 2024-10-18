import {derivative, evaluate, abs} from "mathjs"
import { pow } from "mathjs";
function LogicNewton({func, start}){
    const eps=1e-6;
    let x = parseFloat(start);
    let res;
    const maxIter = 1000;
    let iter = 0;
    do {
        const fx = evaluate(func, { x });

        const fPrime = derivative(func, "x").evaluate({ x });

        res = fx / fPrime;
 
        x = x - res;

        iter++;
    } while (abs(res) > eps && iter < maxIter); 

    return x; 
}

export default LogicNewton; 