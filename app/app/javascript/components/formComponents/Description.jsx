import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ description }) => (
  <label className="description-input" htmlFor="description">
  description:
    <textarea name="description" value={description} />
  </label>
);

export default Description;

Description.propTypes = {
  description: PropTypes.string.isRequired,
};
