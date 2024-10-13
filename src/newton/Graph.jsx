'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,Legend, ResponsiveContainer } from "recharts"
import { evaluate } from "mathjs";

function Graph({ func, vals }) {
    let xyVals = [];
    try {
        for (let i = vals[0]; i <= vals[1]; i += 0.5) {
            const funcVal = evaluate(func, { x: i });
            xyVals.push({ x: i, y: funcVal });
        }
    } catch (error) {
        console.error("Error evaluating function: ", error);
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={xyVals}
                margin={{ right: 30 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" /> 
                <YAxis />
                <Line type="monotone" dataKey="y" stroke="#8b5cf6" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default Graph