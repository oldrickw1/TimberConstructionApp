import React, { useEffect, useRef } from 'react';

const Globe = ({ markers, onMarkerClick }) => {
  const earthRef = useRef(null); 

  useEffect(() => {
    // Initialize the globe only once
    earthRef.current = new WE.map('earth_div');
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earthRef.current);
    earthRef.current.setView([51.505, 0], 4);

   }, []); // Empty dependency array to initialize the map only once

  useEffect(() => {
    // Remove any existing markers before adding new ones to avoid duplication
    if (earthRef.current) {

      // Add markers to the globe
      markers.forEach((marker) => {
        const mapMarker = WE.marker([marker.lat, marker.lng]).addTo(earthRef.current);
        mapMarker.bindPopup(`
          <h3>${marker.name}</h3>
          <img src="${marker.image}" alt="${marker.name}" style="width:100px;height:100px;"><br>
          <a href="#" onclick="return false;">More Info</a>
        `, { maxWidth: 200, closeButton: true });

        mapMarker.on('click', () => {
          onMarkerClick(marker);
        });
      });
    }
  }, [markers, onMarkerClick]); // Only re-run when markers change

  return <div id="earth_div" style={{ height: '50vh', width: '50vw' }} />;
};

export default Globe;
