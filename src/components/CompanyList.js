import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCompany } from '../features/companySlice';

const CompanyList = ({ setEditable }) => {
  const companies = useSelector((state) => state.company.companies);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Company List</h3>
      {companies.length === 0 ? (
        <p>No companies added yet.</p>
      ) : (
        <ul>
          {companies.map((c) => (
            <li key={c.id}>
              <strong>{c.name}</strong> - {c.location}
              <button onClick={() => setEditable(c)}>Edit</button>
              <button onClick={() => dispatch(deleteCompany(c.id))}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompanyList;
