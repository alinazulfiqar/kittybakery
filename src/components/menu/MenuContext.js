import React from "react";
import { useState, createContext } from "react";

export const MenuToggleContext = createContext();

export const MenuToggleContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <MenuToggleContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </MenuToggleContext.Provider>
  );
};
