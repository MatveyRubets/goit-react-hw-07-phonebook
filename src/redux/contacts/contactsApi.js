import axios from 'axios';

axios.defaults.baseURL = 'https://630b98e5ed18e82516562154.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get('contacts');
  return data;
}

export async function addContacts({ name, phone: number }) {
  const { data } = await axios.post(`/contacts/`, {
    name,
    phone: number,
  });
  return data;
}

export async function removeContacts(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
