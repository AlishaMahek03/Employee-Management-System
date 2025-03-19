import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utilis/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Initialize with default structure to prevent null context
  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    setLocalStorage(); // Ensure data is initialized
    const { employees } = getLocalStorage();
    setUserdata(employees);
  }, []);

  return (
    <AuthContext.Provider value={[userdata, setUserdata]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;