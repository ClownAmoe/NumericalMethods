import "./BodyNewton.css"
import { useEffect, useState } from "react"
import LogicNewton from "./LogicNewton"
import Graph from "./Graph"

function BodyNewton() {
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
                <button onClick={(e) => {setRes(LogicNewton({ func, vals, start }))}}>See result</button>
            </div>

            <div className="res">
                {res && <p>Result: {res}</p>}
            </div>

            <div className="graph">
                {<Graph func={func} vals={vals} />}
            </div>
        </div>
    )
}

export default BodyNewton
