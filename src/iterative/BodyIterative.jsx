import { useState } from "react"
import "./BodyIterative.css"
import Graph from "../newton/Graph"
import LogicIterative from "./LogicIterative"
function BodyIterative(){
    const [func, setFunc] = useState("")
    const [vals, setVals] = useState([])
    const [start, setStart] = useState("")
    const [res, setRes] = useState("")
    
    return (
        <div className="body">
            <label>Enter your function
                <p><input name="funcVal" onChange={(e) => setFunc(e.target.value)} /></p>
            </label>

            <label>Enter range for x
                <p><input name="rangeVal" onChange={(e) => setVals(e.target.value.split(",").map(Number))} /></p>
            </label>

            <label>Enter start value
                <p><input name="startVal" onChange={(e) => setStart(e.target.value)} /></p>
            </label>

            <div>
                <button onClick={(e) => {setRes(LogicIterative({func, start}))}}>See result</button>
            </div>

            <div className="res">
                {<p>Result: {res}</p>}
            </div>

            <div className="graph">
                {<Graph func={func} vals={vals} />}
            </div>
        </div>
    )
}

export default BodyIterative