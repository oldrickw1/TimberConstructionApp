import React, { useState } from 'react';

const Filter = ({ markers, handleFilter, getRandom}) => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (e) => {
    const text = e.target.value;

    setFilterText(text);
  };


  return (
    <div style={filterStyles}>
      <h3>Filter Projects</h3>
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

const filterStyles = {
  padding: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  height: '100%',
};

export default Filter;
