import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice.js';
import { filterReducer } from './filterSlice.js';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
