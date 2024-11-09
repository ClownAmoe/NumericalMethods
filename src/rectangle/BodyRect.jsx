import { useState } from "react"
import "./BodyRect.css"
import LogicRect from "./LogicRect"

function BodyRect(){
    const[func, setFunc] = useState("")
    const[nums, setNums] = useState([])
    const[n, setN] = useState("")
    const[res, setRes] = useState("")
    return(
        <div className="body">
        <label>Enter your function</label>
        <p><input onChange={(e) => setFunc(e.target.value)}></input></p>
        <label>Enter your segment boundaries</label>
        <p><input onChange={(e) => setNums(e.target.value.split(",").map(Number))}></input></p>
        <label>Enter n</label>
        <p><input onChange={(e) => setN(e.target.value)}></input></p>
        <button onClick={() => setRes(LogicRect({func, nums, n}))}>See result</button>
        <p className="res">Result: {res}</p>
        </div>
    )
}

export default BodyRect