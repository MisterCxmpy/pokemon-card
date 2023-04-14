import React, { useState, useContext, createContext } from 'react';

const RefreshContext  = createContext();

export const RefreshProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);

  return (
    <RefreshContext.Provider value={{ refresh, setRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => useContext(RefreshContext);