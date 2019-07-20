import React from 'react';
import PropTypes from 'prop-types';

const City = ({ city }) => (
  <label htmlFor="city">
  City:
    <input type="text" name="city" value={city} />
  </label>
);

export default City;

City.propTypes = {
  city: PropTypes.string.isRequired,
};
