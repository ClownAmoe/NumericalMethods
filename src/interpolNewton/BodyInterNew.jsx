import "./BodyInterNew.css"
import LogicInterNew from "./LogicInterNew.jsx"
import { useState } from "react";
import GraphInterpolation from "../interpolationLagr/GraphInterpolation.jsx";
function BodyInterNew(){
    const[xVals, setXVals] = useState([]);
    const[yVals, setYVals] = useState([]);
    const[x, setX] = useState();
    const[res, setRes] = useState()

    return(
        <>
        
        <label>
        <p className="text">Enter x values</p>
        <p><input onChange={(e) => {setXVals(e.target.value.split(',').map(Number))}}/></p>
        </label>


        <label>
            <p className="text">Enter y values</p>
            <p><input onChange={(e) => {setYVals(e.target.value.split(',').map(Number))}}/></p>
        </label>

        <label>
            <p className="text">Enter x</p>
            <p><input onChange={(e) => {setX(parseFloat(e.target.value))}}/></p>
        </label>

        <button onClick={() => setRes(LogicInterNew({xVals, yVals, x}))}>Calculate</button>

        <p className="res">Result: {res}</p>

        <div className="graph">
            <GraphInterpolation xVals={xVals} yVals={yVals}/>
        </div>

        </>
    )
}


export default BodyInterNew