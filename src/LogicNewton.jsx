import {derivative, evaluate, abs} from "mathjs"
function LogicNewton({func, vals, start}){
    const eps=1e-6;
    let x = parseFloat(start);
    let res;
    do {
        const fx = evaluate(func, { x });

        const fPrime = derivative(func, "x").evaluate({ x });

        res = fx / fPrime;
        x = x - res;

    } while (abs(res) > eps); 

    return x; 
}

export default LogicNewton; 