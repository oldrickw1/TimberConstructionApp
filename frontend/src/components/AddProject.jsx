
import React, { useState } from 'react';
import axios from 'axios';

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
      // Example URL for the API Gateway; replace with your actual endpoint
      const response = await axios.post('http://api-gateway-url/projects', projectData); // TODO: connect to gateway (and connect gateway to project service)
      console.log('Project added successfully:', response.data);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      {/* ID Field */}
      <label>
        ID:
        <input
          type="text"
          name="ID"
          value={projectData.ID}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Name Field */}
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={projectData.name}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Image URL Field */}
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={projectData.image}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Continent Field */}
      <label>
        Continent:
        <input
          type="text"
          name="continent"
          value={projectData.continent}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Country Field */}
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={projectData.country}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* City Field */}
      <label>
        City:
        <input
          type="text"
          name="city"
          value={projectData.city}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Location Fields */}
      <h3>Location</h3>
      <label>
        Address:
        <input
          type="text"
          name="location.address"
          value={projectData.location.address}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Latitude:
        <input
          type="text"
          name="location.lat"
          value={projectData.location.lat}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Longitude:
        <input
          type="text"
          name="location.lng"
          value={projectData.location.lng}
          onChange={handleInputChange}
        />
      </label>
      {/* Add more location fields as necessary, following the same pattern */}

      {/* Proposed Year Field */}
      <label>
        Proposed Year:
        <input
          type="text"
          name="proposed_year"
          value={projectData.proposed_year}
          onChange={handleInputChange}
        />
      </label>

      {/* Status Field */}
      <label>
        Status:
        <input
          type="text"
          name="status"
          value={projectData.status}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Function Field */}
      <label>
        Function:
        <input
          type="text"
          name="function"
          value={projectData.function}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Link Field */}
      <label>
        Link:
        <input
          type="text"
          name="link"
          value={projectData.link}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Submit Button */}
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProject;
