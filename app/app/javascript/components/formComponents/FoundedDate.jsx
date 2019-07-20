import React from 'react';
import PropTypes from 'prop-types';

const FoundedDate = ({ date }) => (
  <label className="date-input" htmlFor="date">
  Founded Date:
    <input type="date" name="date" value={date} />
  </label>
);

export default FoundedDate;

FoundedDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};
