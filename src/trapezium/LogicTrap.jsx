import { evaluate } from "mathjs";

function LogicTrap({ func, nums, n }) {
    const a = nums[0];
    const b = nums[1];
    const h = (b - a) / n;

    let fa = evaluate(func, { x: a });
    let fb = evaluate(func, { x: b });
    let sum = fa + fb;

    for (let i = 1; i < n; i++) { 
        const xi = a + i * h;
        sum += 2 * evaluate(func, { x: xi });
    }

    return (h / 2) * sum;
}

export default LogicTrap;
