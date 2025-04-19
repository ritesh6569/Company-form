import { configureStore } from '@reduxjs/toolkit';
import companyReducer from '../features/companySlice';

const saveToLocalStorage = (storeAPI) => (next) => (action) => {
  const result = next(action);
  const state = storeAPI.getState();
  try {
    localStorage.setItem('companies', JSON.stringify(state.company.companies));
  } catch (err) {
    console.error('Could not save to localStorage', err);
  }
  return result;
};

export const store = configureStore({
  reducer: {
    company: companyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage),
});
