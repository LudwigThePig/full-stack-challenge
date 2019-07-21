import React from 'react';
import PropTypes from 'prop-types';

const CompanyName = ({ name, handler }) => (
  <label className="company-name-input required" htmlFor="companyName">
  Company Name:
    <br />
    <input
      type="text"
      name="name"
      value={name}
      onChange={handler}
      required
    />
  </label>
);

export default CompanyName;

CompanyName.propTypes = {
  name: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
