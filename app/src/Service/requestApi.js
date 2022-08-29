const axios = require('axios');

export const getByCategories = async() => {
  const response = await axios.get("https://api.mercadolibre.com/sites/MLB");
  return response.data.categories;
}

export const getByProducts = async(category) => {
  const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${category}`);
  return response.data;
}
