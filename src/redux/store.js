import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {
  entities,
  isLoading,
  error,
  filterReducer,
} from './contacts/contactsReducer';

const rootReducer = {
  contacts: combineReducers({
    entities,
    filter: filterReducer,
    isLoading,
  }),
  error,
};

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
