import React from 'react';
import PropTypes from 'prop-types';

const FoundedDate = ({ date, handler }) => (
  <label className="date-input" htmlFor="date">
  Founded Date:
    <input
      type="date"
      name="date"
      placeholder="1996-12-25"
      value={date}
      onChange={handler}
    />
  </label>
);

export default FoundedDate;

FoundedDate.propTypes = {
  date: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,

};
