import React, { useState } from 'react';
import './Filter.css'

const Filter = ({ markers, handleFilter, getRandom}) => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (e) => {
    const text = e.target.value;

    setFilterText(text);
  };


  return (
    <div className='filter'>
      <h3 className='filter-title'>Filter Projects</h3>
      <input 
        type="text" 
        value={filterText}
        onChange={handleFilterChange}
        placeholder="Filter by name..." 
      />
      <button onClick={handleFilter}>filter</button>
      <br></br>
      <button onClick={getRandom}>Get Random Data</button>
    </div>
  );
};


export default Filter;
