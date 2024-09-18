import React, { useState } from 'react';
import Globe from './home/Globe';
import InfoPanel from './home/InfoPanel';
import Filter from './home/Filter'; 
import {projects} from '../../data/projects';
import {filtered} from '../../data/filteredMock';
import axios from 'axios';
import { sampleSize } from 'lodash';


const startMarkers = projects.slice(0,3);


function Home() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [filteredMarkers, setFilteredMarkers] = useState(startMarkers);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  function getRandom() {
    const randomSize = Math.floor(Math.random() * (projects.length - 2)) + 3;  // Generate a number > 2 and <= data.length
    const newRandomMarkers = sampleSize(projects, randomSize);
    setFilteredMarkers(newRandomMarkers);
  }

  
  function handleFilter() {
    // remove this (just a test to see if backend con works)

   axios.get('http://localhost:8080/api/project')
   .then(function (response) {
     console.log(response.data); // Handle the response data here
   })
   .catch(function (error) {
     console.error('Error fetching data:', error);
   });
   console.log("Calling api")

  } 
  

  return (
    <div className="home">
      <div className="filter-section">
        <Filter markers={filteredMarkers} handleFilter={handleFilter} getRandom={getRandom}/>
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
