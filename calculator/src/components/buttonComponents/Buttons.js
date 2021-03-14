import React from 'react'
import "./buttons.style.css";

const buttons1=[
    "Ac","C","OFF",9,8,7,6,5,4,3,2,1,0,"/",".","-","+","*","%","="
]

export const Buttons = ({buttonClick}) => {
    return (
        <div className="buttons">
        {   
        buttons1.map((item, i)=>
        <button key={i} className="numBtn"
        onClick={() =>buttonClick(item)}>{item}</button>
        )
        }
        </div>
    )
}
