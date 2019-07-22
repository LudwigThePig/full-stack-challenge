import React from 'react';
import PropTypes from 'prop-types';

const FoundedDate = ({ founded_date, handler }) => (
  <label className="date-input" htmlFor="founded_date">
  Founded Date:
    <br />
    <input
      type="date"
      name="founded_date"
      placeholder="1996-12-25"
      value={founded_date}
      onChange={handler}
    />
  </label>
);

export default FoundedDate;

FoundedDate.propTypes = {
  founded_date: PropTypes.string,
  handler: PropTypes.func.isRequired,
};
