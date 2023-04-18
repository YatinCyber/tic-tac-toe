import React from "react";
import "./Cell.scss";



interface CellProps {
    ind: number;
  }

const Cell = ({ind} : CellProps) => {
    

    
    return (
        <h1>{ind}</h1>

    )

}
export default Cell;