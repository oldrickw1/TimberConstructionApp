import './Filter.css'

// Todo: add reset filter button

const Filter = ({ searchTerm, handleSearch, selectedFunction, handleFunctionChange, selectedStatus, handleStatusChange, amountOfMarkers, getRandom}) => {
const uniqueFunctions = ['Commericial', 'Industrial', 'Commercial', 'Other', 'Recreational', 'Mixed-use', 'Residential', 'Institutional', ];
const uniqueStatuses = ['Demolished', 'Canceled', 'Under Construction', 'Proposed', 'Demolished/Dismantled', 'Completed'];


  return (
    <div className='filter'>
      <h3 className='filter-title'>Filter Projects</h3>
      <input 
        type="text" 
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Filter by name..." 
      />
      {/* Dropdown for function */}
      <select value={selectedFunction} onChange={handleFunctionChange}>
      <option value="">All Functions</option>
      {uniqueFunctions.map(func => (
            <option key={func} value={func}>{func}</option>
          ))}
        </select>

        {/* Dropdown for status */}
        <select value={selectedStatus} onChange={handleStatusChange}>
          <option value="">All Statuses</option>
          {uniqueStatuses.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        <div className="overview">
          <p>Showing {amountOfMarkers} markers</p>
        </div>
      <br></br>
      <button onClick={getRandom}>Get Random Data</button>
    </div>
  );
};


export default Filter;
