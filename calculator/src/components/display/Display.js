import React from 'react'
import"./display.style.css"
export const Display = ({txtDisp,txtTotal}) => {
    return (
        <div className="input">
            { txtTotal || txtDisp || "0.00"}
        </div>
    )
}
