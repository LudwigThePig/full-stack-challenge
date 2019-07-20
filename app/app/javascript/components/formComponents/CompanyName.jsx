import React from 'react';
import PropTypes from 'prop-types';

const CompanyName = ({ companyName, handler }) => (
  <label className="company-name-input required" htmlFor="companyName">
  Company Name:
    <br />
    <input
      type="text"
      name="companyName"
      value={companyName}
      onChange={handler}
      required
    />
  </label>
);

export default CompanyName;

CompanyName.propTypes = {
  companyName: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
