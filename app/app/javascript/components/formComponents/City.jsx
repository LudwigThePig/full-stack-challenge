import React from 'react';
import PropTypes from 'prop-types';

const City = ({ city, handler }) => (
  <label className="city-input required" htmlFor="city">
  City:
    <br />
    <input
      type="text"
      name="city"
      value={city}
      onChange={handler}
      required
    />
  </label>
);

export default City;

City.propTypes = {
  city: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
