import { evaluate } from "mathjs";

function LogicRect({ func, nums, n }) {
    let sum = 0;
    const a = nums[0]; 
    const b = nums[1]; 
    const h = (b - a) / n; 

    for (let i = 0; i < n; ++i) {
        const xi = a + i * h + h / 2; 
        sum += evaluate(func, { x: xi });
    }

    return sum * h; 
}

export default LogicRect;
