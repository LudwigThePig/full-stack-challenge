import React from 'react';
import PropTypes from 'prop-types';

const CompanyName = ({ companyName, handler }) => (
  <label className="company-name-input" htmlFor="companyName">
  Company Name:
    <input
      type="text"
      name="companyName"
      value={companyName}
      onChange={handler}
    />
  </label>
);

export default CompanyName;

CompanyName.propTypes = {
  companyName: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
