import React, { useState } from 'react';
import axios from 'axios';
import './AddProject.css';  // Make sure this CSS is linked

const AddProject = () => {
  // Initial state for the form fields
  const [projectData, setProjectData] = useState({
    ID: '',
    name: '',
    image: '',
    continent: '',
    country: '',
    city: '',
    location: {
      address: '',
      lat: '',
      lng: '',
      zoom: '',
      place_id: '',
      street_number: '',
      street_name: '',
      street_name_short: '',
      city: '',
      city_short: '',
      state: '',
      state_short: '',
      post_code: '',
      country: '',
      country_short: ''
    },
    proposed_year: '',
    status: '',
    function: '',
    link: ''
  });

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('location.')) {
      const fieldName = name.split('.')[1];
      setProjectData((prevData) => ({
        ...prevData,
        location: {
          ...prevData.location,
          [fieldName]: value
        }
      }));
    } else {
      setProjectData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/projects", projectData);
      console.log('Project added successfully:', response.data);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="add-project-form"  autoComplete="off">
      <h2 id="form-title">Add Project</h2>

      {/* ID Field */}
      <label htmlFor="project-id" className="form-label">
        ID:
        <input
          type="text"
          id="project-id"
          className="form-input"
          name="ID"
          value={projectData.ID}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Name Field */}
      <label htmlFor="project-name" className="form-label">
        Name:
        <input
          type="text"
          id="project-name"
          className="form-input"
          name="name"
          value={projectData.name}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Image URL Field */}
      <label htmlFor="project-image" className="form-label">
        Image URL:
        <input
          type="text"
          id="project-image"
          className="form-input"
          name="image"
          value={projectData.image}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Continent Field */}
      <label htmlFor="project-continent" className="form-label">
        Continent:
        <input
          type="text"
          id="project-continent"
          className="form-input"
          name="continent"
          value={projectData.continent}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Country Field */}
      <label htmlFor="project-country" className="form-label">
        Country:
        <input
          type="text"
          id="project-country"
          className="form-input"
          name="country"
          value={projectData.country}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* City Field */}
      <label htmlFor="project-city" className="form-label">
        City:
        <input
          type="text"
          id="project-city"
          className="form-input"
          name="city"
          value={projectData.city}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Location Fields */}
      <h3 id="location-section">Location</h3>
      <label htmlFor="project-location-address" className="form-label">
        Address:
        <input
          type="text"
          id="project-location-address"
          className="form-input"
          name="location.address"
          value={projectData.location.address}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="project-location-lat" className="form-label">
        Latitude:
        <input
          type="text"
          id="project-location-lat"
          className="form-input"
          name="location.lat"
          value={projectData.location.lat}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="project-location-lng" className="form-label">
        Longitude:
        <input
          type="text"
          id="project-location-lng"
          className="form-input"
          name="location.lng"
          value={projectData.location.lng}
          onChange={handleInputChange}
        />
      </label>

      {/* Proposed Year Field */}
      <label htmlFor="project-proposed-year" className="form-label">
        Proposed Year:
        <input
          type="text"
          id="project-proposed-year"
          className="form-input"
          name="proposed_year"
          value={projectData.proposed_year}
          onChange={handleInputChange}
        />
      </label>

      {/* Status Field */}
      <label htmlFor="project-status" className="form-label">
        Status:
        <input
          type="text"
          id="project-status"
          className="form-input"
          name="status"
          value={projectData.status}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Function Field */}
      <label htmlFor="project-function" className="form-label">
        Function:
        <input
          type="text"
          id="project-function"
          className="form-input"
          name="function"
          value={projectData.function}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Link Field */}
      <label htmlFor="project-link" className="form-label">
        Link:
        <input
          type="text"
          id="project-link"
          className="form-input"
          name="link"
          value={projectData.link}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Submit Button */}
      <button type="submit" id="submit-button">Add Project</button>
    </form>
  );
};

export default AddProject;
