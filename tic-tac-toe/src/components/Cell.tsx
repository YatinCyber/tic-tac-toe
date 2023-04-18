import React from 'react';
import { useState } from 'react';
import './Cell.scss';

interface CellProps {
  ind: number;
  display: string;
}

const Cell = ({ ind, display, handleCell }) => {
  const handleClick = () => {
    handleCell(ind);
  };

  return (
    <div className="cell" onClick={handleClick}>
      <span className={display}></span>
    </div>
  );
};
export default Cell;
