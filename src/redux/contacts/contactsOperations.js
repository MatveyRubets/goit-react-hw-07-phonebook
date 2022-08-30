import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContacts, removeContacts } from './contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      return await getContacts();
    } catch (error) {
      return error.message;
    }
  }
);
export const postContacts = createAsyncThunk(
  'contacts/postContacts',
  async ({ name, phone: number }) => {
    try {
      return await addContacts({ name, phone: number });
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    try {
      return await removeContacts(id);
    } catch (error) {
      return error.message;
    }
  }
);
