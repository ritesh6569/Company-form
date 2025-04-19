import React, { useState } from 'react';
import CompanyForm from './components/CompanyForm';
import CompanyList from './components/CompanyList';
import './App.css';

const App = () => {
  const [editable, setEditable] = useState(null);

  return (
    <div className="App">
      <h1>Kodars Klub</h1>
      <CompanyForm editable={editable} setEditable={setEditable} />
      <CompanyList setEditable={setEditable} />
    </div>
  );
};

export default App;
