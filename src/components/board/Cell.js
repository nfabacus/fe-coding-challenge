import React from 'react';

const Cell = ({ cell, onClick }) => {
  return (
    <div
      className="Cell d-flex align-items-center justify-content-center border border-white font-weight-bold"
      role="button"
      onClick={onClick}
    >
      {cell}
    </div>
  )
}

export default Cell