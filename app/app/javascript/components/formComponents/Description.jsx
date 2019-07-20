import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ description, handler }) => (
  <label className="description-input" htmlFor="description">
  description:
    <textarea
      name="description"
      value={description}
      onChange={handler}
    />
  </label>
);

export default Description;

Description.propTypes = {
  description: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
