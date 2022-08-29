import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [reloadPage ,setReloadPage] = useState(false);


  useEffect(() => {
    setReloadPage(false);
  }, [reloadPage]);

  return (
    <AppContext.Provider
      value={ {
        reloadPage,
        setReloadPage,
      } }
    >
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
