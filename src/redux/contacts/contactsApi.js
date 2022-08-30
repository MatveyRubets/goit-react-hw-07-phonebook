const { default: axios } = require('axios');

axios.defaults.baseURL = 'https://630b98e5ed18e82516562154.mockapi.io/';

export const getContacts = async () => {
  const { data } = await axios.get('contacts');

  return data;
};

export const addContacts = async ({ name, phone: number }) => {
  const { data } = await axios.post('/contacts/', {
    name,
    phone: number,
  });

  return data;
};

export const removeContacts = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);

  return data;
};
