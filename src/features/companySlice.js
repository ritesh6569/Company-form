import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('companies');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Failed to load from localStorage:', err);
    return [];
  }
};

const initialState = {
  companies: loadFromLocalStorage(),
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    addCompany: (state, action) => {
      state.companies.push({ ...action.payload, id: Date.now() });
    },
    updateCompany: (state, action) => {
      const index = state.companies.findIndex(c => c.id === action.payload.id);
      if (index !== -1) state.companies[index] = action.payload;
    },
    deleteCompany: (state, action) => {
      state.companies = state.companies.filter(c => c.id !== action.payload);
    },
  },
});

export const { addCompany, updateCompany, deleteCompany } = companySlice.actions;
export default companySlice.reducer;
