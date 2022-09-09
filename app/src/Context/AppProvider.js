import React, { useState, useEffect } from 'react';
import { getByCategories, getByProducts } from '../Service/requestApi';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [reloadPage ,setReloadPage] = useState(false);
  const [categoryList ,setCategoryList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Acessórios para Veículos');

  const getCategory = async () => {
    await getByCategories().then((response) =>
      setCategoryList(response)
    );
  };

  const getProducts = async (category) => {
    await getByProducts(category).then((response) =>
      setProductsList(response.results)
    );
  };

  useEffect(() => {
    setReloadPage(false);
  }, [reloadPage, selectedCategory]);

  useEffect(() => {
    getCategory();
    getProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <AppContext.Provider
      value={ {
        reloadPage,
        setReloadPage,
        categoryList,
        setCategoryList,
        productsList,
        setProductsList,
        selectedCategory,
        setSelectedCategory
      } }
    >
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
