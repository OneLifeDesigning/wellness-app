import React, { useState, createContext, useContext } from "react";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const value = { data, setData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
