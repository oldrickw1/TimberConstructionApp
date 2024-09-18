import React, { useEffect } from 'react';

const Globe = ({ markers, onMarkerClick }) => {
  useEffect(() => {
    var earth = new WE.map('earth_div');
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
    earth.setView([51.505, 0], 4);

    // Add markers to the globe
    markers.forEach((marker) => {
      const mapMarker = WE.marker([marker.lat, marker.lng]).addTo(earth);
      mapMarker.bindPopup(`
        <h3>${marker.name}</h3>
        <img src="${marker.image}" alt="${marker.name}" style="width:100px;height:100px;"><br>
        <a href="#" onclick="return false;">More Info</a>
      `, { maxWidth: 200, closeButton: true });

      mapMarker.on('click', () => {
        onMarkerClick(marker);
      });
    });
  }, [markers, onMarkerClick]);

  return <div id="earth_div" style={{ height: '50vh', width: '50vw'}} />;
};

export default Globe;
