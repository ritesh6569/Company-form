import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCompany, updateCompany } from '../features/companySlice';

const CompanyForm = ({ editable, setEditable }) => {
  const [company, setCompany] = useState({ name: '', location: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    if (editable) setCompany(editable);
  }, [editable]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editable) {
      dispatch(updateCompany(company));
      setEditable(null);
    } else {
      dispatch(addCompany(company));
    }
    setCompany({ name: '', location: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Company Name"
        value={company.name}
        onChange={(e) => setCompany({ ...company, name: e.target.value })}
        required
      />
      <input
        placeholder="Location"
        value={company.location}
        onChange={(e) => setCompany({ ...company, location: e.target.value })}
        required
      />
      <button type="submit">{editable ? 'Update' : 'Add'} Company</button>
    </form>
  );
};

export default CompanyForm;
