import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Edit({ id }) {
  const url = "https://de8jo1lugqs3e.cloudfront.net/api/Crud/";

  const [data, setData] = useState(null);
  let { burialNum, area, eastWest, sqew, northSouth, sqns } = useParams();

  useEffect(() => {
    // Fetch the current record data from the server
    axios
      .get(
        `${url}${burialNum}/${area}/${eastWest}/${sqew}/${northSouth}/${sqns}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send an HTTP PUT request to update the record
    axios
      .put(`/api/records/${id}`, data)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    // Update the record data in state as the user types
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default Edit;
