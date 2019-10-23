import React from 'react';
import './style.css';

const Row = ({ label, children }) => (
  <div className="row">
    <span className="row-title">{label}</span>
    <span className="row-content">{children}</span>
  </div>
);

export default Row;
