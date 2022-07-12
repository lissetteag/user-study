import React from "react";
import "../styles/tableTitle.css";

const TableTitle = ({ title }) => {
  return (
    <div className="tableTitle">
      <ul>
        <li>{title}</li>
        <li>Relevant</li>
        <li>Obvious</li>
        <li>Redundant</li>
        <li>Context</li>
        <li>Specific</li>
      </ul>
    </div>
  );
};

export default TableTitle;
