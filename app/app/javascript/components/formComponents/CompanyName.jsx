import React from 'react';
import PropTypes from 'prop-types';

const CompanyName = ({ companyName }) => (
  <label className="company-name-input" htmlFor="companyName">
  Company Name:
    <input type="text" name="companyName" value={companyName} />
  </label>
);

export default CompanyName;

CompanyName.propTypes = {
  companyName: PropTypes.string.isRequired,
};
