import React from 'react';
import './InfoPanel.css'

const InfoPanel = ({ marker }) => {
  return (
    <>
     <div className="info-container">
      <div className="info-image">
        <img src={marker.image} alt={marker.name} />
      </div>

      <div className="info-content">
        <h1 className="info-title">{marker.name}</h1>
        <p className="info-status">
          <strong>Status:</strong> {marker.status}
        </p>
        <p className="info-location">
          <strong>Location:</strong> {marker.location.address}
        </p>
        <p className="info-city">
          <strong>City:</strong> {marker.city}, {marker.location.state_short}, {marker.location.country_short}
        </p>
        <p className="info-continent">
          <strong>Continent:</strong> {marker.continent}
        </p>
        <p className="info-country">
          <strong>Country:</strong> {marker.country}
        </p>
        <p className="info-function">
          <strong>Function:</strong> {marker.function}
        </p>
        <p className="info-proposed-year">
          <strong>Proposed Year:</strong> {marker.proposed_year}
        </p>
        <a href={marker.link} target="_blank" rel="noopener noreferrer" className="info-link">
          Learn More
        </a>
      </div>
    </div>
  </>
  );
};

export default InfoPanel;
