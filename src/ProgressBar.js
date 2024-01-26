import { useEffect } from "react";
import "./ProgressBar.css"

export default function ProgressBar({value, max_val}){


    let percentage = (value / max_val) * 100;
    

    return(
        <div className="progress-bar-container" >
            <div style={{"width" : `${percentage}%`, "backgroundColor": percentage >= 60 ? "red" : "green"}} className="progress-gauge"/>{percentage.toFixed(3)}%
        </div>
    )
}