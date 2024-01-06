import React from "react";
import MenuItems from "./MenuItems";


const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`} style={{color:"black"}}>
      {submenus.map((submenu, index) => (
        <MenuItems className="Submenu" items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
