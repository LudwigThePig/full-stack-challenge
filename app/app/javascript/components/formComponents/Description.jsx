import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ description, handler }) => (
  <label className="description-input required" htmlFor="description">
  description:
    <br />
    <textarea
      name="description"
      value={description}
      onChange={handler}
      required
    />
  </label>
);

export default Description;

Description.propTypes = {
  description: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
