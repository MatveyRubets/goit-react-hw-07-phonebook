import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  postContacts,
  deleteContacts,
} from './contactsOperations';
import { filter } from './contactsActions';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [postContacts.fulfilled]: (state, action) => [action.payload, ...state],
  [deleteContacts.fulfilled]: (state, action) =>
    state.filter(item => item.id !== action.payload.id),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: true,
  [fetchContacts.fulfilled]: false,
  [fetchContacts.rejected]: false,
  [postContacts.pending]: true,
  [postContacts.fulfilled]: false,
  [postContacts.rejected]: false,
  [deleteContacts.pending]: true,
  [deleteContacts.fulfilled]: false,
  [deleteContacts.rejected]: false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [postContacts.rejected]: (_, action) => action.payload,
  [postContacts.pending]: () => null,
  [deleteContacts.rejected]: (_, action) => action.payload,
  [deleteContacts.pending]: () => null,
});

const filterReducer = createReducer('', {
  [filter]: (_, action) => action.payload.toLowerCase(),
});

export { entities, isLoading, error, filterReducer };
