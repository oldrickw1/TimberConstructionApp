import React, { useState, useEffect} from 'react';
import Globe from './home/Globe';
import InfoPanel from './home/InfoPanel';
import Filter from './home/Filter'; 
import axios from 'axios';
import { sampleSize } from 'lodash';

// Todo: check if all those props passed to Filter are really necessary / if Filter needs its own component. 

function Home() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [filteredMarkers, setFilteredMarkers] = useState([]);
  const [allMarkers, setAllMarkers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [selectedFunction, setSelectedFunction] = useState("");  // New state for function filter
  const [selectedStatus, setSelectedStatus] = useState("");    

  useEffect(() => {
    fetchMarkers();
  }, []);



  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  function handleFilter() {
    console.log("Filter is clicked")
  }

  function getRandom() {
    const randomSize = Math.floor(Math.random() * (allMarkers.length - 2)) + 3;  // Generate a number > 2 and <= data.length
    const newRandomMarkers = sampleSize(allMarkers, randomSize);
    setFilteredMarkers(newRandomMarkers);
  }

  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFunctionChange = (e) => {
    setSelectedFunction(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  // Function to filter markers based on search term, function, and status
  const filterMarkers = () => {
    const filtered = allMarkers.filter(marker => {
      const matchesName = marker.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFunction = selectedFunction === "" || marker.function === selectedFunction;
      const matchesStatus = selectedStatus === "" || marker.status === selectedStatus;

      return matchesName && matchesFunction && matchesStatus;
    });
    setFilteredMarkers(filtered);
  };

  useEffect(() => {
    filterMarkers();
  }, [searchTerm, selectedFunction, selectedStatus]);  // Filter when any of these values change


 
  const fetchMarkers = () => {
    axios.get('http://localhost:8080/api/project') // Todo: extract const with url 
      .then(function (response) {
        const markers = response.data;  
        setAllMarkers(markers);  
        setFilteredMarkers(markers); // filteredMarkers is initually just "allMarkers"
      })
      .catch(function (error) {
        console.error('Error fetching markers:', error);
      });
  };
  

  return (
    <div className="home">
      <div className="filter-section">
        <Filter searchTerm={searchTerm} handleSearch={handleSearch} selectedFunction={selectedFunction} handleFunctionChange={handleFunctionChange} selectedStatus={selectedStatus}  handleStatusChange={handleStatusChange} amountOfMarkers={filteredMarkers.length } getRandom={getRandom} />
      </div>
      <div className="globe-section">
        <Globe markers={filteredMarkers} onMarkerClick={handleMarkerClick} />
      </div>
      <div className="info-section">
        {selectedMarker ? <InfoPanel marker={selectedMarker} /> : <p className='info'>Select a marker to view more details</p>}
      </div>
    </div>
  );
}

export default Home;
