import React from 'react';
import PropTypes from 'prop-types';

const State = ({ state }) => (
  <label className="state-input" htmlFor="state">
  State:
    <input type="text" name="state" value={state} />
  </label>
);

export default State;

State.propTypes = {
  state: PropTypes.string.isRequired,
};
