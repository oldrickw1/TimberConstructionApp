import React, { useEffect, useRef} from 'react';

const Globe = ({ markers, onMarkerClick }) => {

  // Todo: This component works, but the entire Cesium viewer is re-rendered on each click on a marker. This causes bad performance. Leaving it for now so that I can focus on connecting to backend. 
  // Todo: Idea: Selected marker should turn another color so you can easily see which one is selected. 

  const  viewerRef = useRef();

  useEffect(() => {
      console.log('rendering');
      if (!viewerRef.current){
          console.log("Creating new cesium viewer")
          Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNDZhMGYyZC1hMDUyLTQ1N2YtODBiZS04MzVjODA3NDE5NDIiLCJpZCI6MjQxOTY2LCJpYXQiOjE3MjY0OTgyNzV9.ZcYZvleQxn5WTqVQBCbfbqXVRhINOF-kj34AmIlcWsU';

          viewerRef.current = new Cesium.Viewer('cesiumContainer', {
              imageryProvider: new Cesium.OpenStreetMapImageryProvider({
                  url: 'https://a.tile.openstreetmap.org/'
                }),
                baseLayerPicker: false,  
                terrainProvider: Cesium.createWorldTerrain(),
          });  
          // // Set the initial view to Spain
          // viewerRef.current.camera.setView({
          //     destination: Cesium.Rectangle.fromDegrees(-9.86, 35.95, 3.34, 43.79) // Bounding box for Spain
          // });
          
          viewerRef.current.screenSpaceEventHandler.setInputAction(function (click) {
            const pickedObject = viewerRef.current.scene.pick(click.position);
            
            // Check if a marker was clicked
            if (Cesium.defined(pickedObject)) {
              const clickedEntity = pickedObject.id;
              console.log(clickedEntity.markerData)
    
              // Get the name from the clicked entity
              if (clickedEntity.markerData ) {
                console.log(`You clicked on ${clickedEntity.markerData.name}`)
                onMarkerClick(clickedEntity.markerData);
              }
            }
          }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

          viewerRef.current.screenSpaceEventHandler.setInputAction(function (click) {
          }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);


          
      }
      
      viewerRef.current.entities.removeAll();

      
      markers.forEach(marker => {
          const entity = viewerRef.current.entities.add({
            position: Cesium.Cartesian3.fromDegrees(marker.location.lng, marker.location.lat),
            billboard: {image: '../../../icons/redMarker.png', width: 32, height: 62},
            markerData: marker 
          });
        });
        
  },[markers])

  return <div id="cesiumContainer" style={{ height: '70vh', width: '50vw' }} />;
};

export default Globe;