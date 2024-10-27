import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
function GraphInterpolation({xVals, yVals}){
    
    let vals = [];
    try{
    for(let i = 0; i < xVals.length; ++i){
        vals.push({x: xVals[i], y: yVals[i]});
    }}catch(e){
        console.error("Error occured");
    }
    
    return(
        <ResponsiveContainer width = "100%" height = "100%">

        <LineChart
        width={500}
        height={300}
        data={vals}
        margin={{ right: 30 }}
        >

        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="x" /> 
        <YAxis />
        <Line type="monotone" dataKey="y" stroke="#8b5cf6" />
        </LineChart>
            
        </ResponsiveContainer>    
    )
}

export default GraphInterpolation