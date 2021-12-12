import api from './apiConfig';

export const getAllCoffees = async () => {
  const resp = await api.get('/coffees');
  return resp.data;
};

export const postCoffee = async (foodData) => {
  const resp = await api.post('/coffees', { coffee: coffeeData });
  return resp.data;
};