import api from './apiConfig';

export const getAllCoffees = async () => {
  const resp = await api.get('/coffees');
  return resp.data;
};