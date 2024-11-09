import { evaluate } from "mathjs";

function LogicSimpson({ func, nums, n }) {
    const a = nums[0];
    const b = nums[1];
    const h = (b - a) / (2 * n);

    let sum = 0;
    sum += evaluate(func, { x: a });

    for (let i = 1; i < 2 * n; i++) {
        const xi = a + i * h;
        if (i % 2 === 0) {
            sum += 2 * evaluate(func, { x: xi });
        } else {
            sum += 4 * evaluate(func, { x: xi });
        }
    }

    sum += evaluate(func, { x: b });
    return (h / 3) * sum;
}

export default LogicSimpson;
