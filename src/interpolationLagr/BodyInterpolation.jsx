import { useState } from "react"
import "./BodyInterpolation.css"
import LogicInterpolation from "./LogicInterpolation";
import GraphInterpolation from "./GraphInterpolation";
function BodyInterpolation(){

    const[xVals, setXVals] = useState([]);
    const[yVals, setYVals] = useState([]);
    const[x, setX] = useState();
    const[res, setRes] = useState()

    return(
        <>
        
        <label>
        <p>Enter x's</p>
        <p><input onChange={(e) => {setXVals(e.target.value.split(',').map(Number))}}/></p>
        </label>


        <label>
            <p>Enter y's</p>
            <p><input onChange={(e) => {setYVals(e.target.value.split(',').map(Number))}}/></p>
        </label>

        <label>
            <p>Enter x value</p>
            <p><input onChange={(e) => {setX(parseFloat(e.target.value))}}/></p>
        </label>

        <button onClick={() => setRes(LogicInterpolation({xVals, yVals, x}))}>Calculate</button>

        <p className="res">Result: {res}</p>

       <div className="graphic">
       {<GraphInterpolation xVals={xVals} yVals={yVals}/>}
       </div>

        </>
    )
}

export default BodyInterpolation