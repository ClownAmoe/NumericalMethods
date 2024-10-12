import "./BodyNewton.css"
import { useState } from "react"
import LogicNewton from "./LogicNewton"

function BodyNewton(){

    const [func, setFunc] = useState("")
    const [vals, setVals] = useState("")
    const [start, setStart] = useState("")
    const [res, setRes] = useState("")

    return(
        <div className="body">
        
        <label>Enter your function
        <p><input name="funcVal" onChange={(e) => setFunc(e.target.value)}/></p>
        </label>

        <label>Enter range for x
        <p><input name="rangeVal" onChange={(e) => setVals(e.target.value.split(","))}/></p>
        </label>

        <label>Enter start value
        <p><input name="startVal" onChange={(e) => setStart(e.target.value)}/></p>
        </label>

        <button onClick={() => setRes(LogicNewton({ func, vals, start }))}>See result</button>
        
        <div>
            {res && <p>Result: {res}</p>}
        </div>
        </div>
    )
}

export default BodyNewton
