import React, { useState, useEffect } from 'react';
import { getByCategories } from '../Service/requestApi';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [reloadPage ,setReloadPage] = useState(false);
  const [categoryList ,setCategoryList] = useState(false);

  const getTeamList = async () => {
    await getByCategories().then((response) =>
      setCategoryList(response)
    );
  };

  useEffect(() => {
    setReloadPage(false);
  }, [reloadPage]);

  useEffect(() => {
    getTeamList();
  }, []);

  return (
    <AppContext.Provider
      value={ {
        reloadPage,
        setReloadPage,
        categoryList,
        setCategoryList
      } }
    >
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
