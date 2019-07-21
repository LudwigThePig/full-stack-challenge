import React from 'react';
import PropTypes from 'prop-types';

const FounderForm = ({
  founder, setFounder, title, setTitle,
}) => (

  <div>
    <label className="required" htmlFor="description">
    Founder Name:
      <br />
      <input
        type="text"
        name="founders-name"
        value={founder}
        onChange={({ target }) => setFounder(target.value)}
      />
    </label>
    <label className="required" htmlFor="description">
      Title:
      <br />

      <input
        type="text"
        name="founders-name"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />

    </label>
    <br />
  </div>
);

export default FounderForm;

FounderForm.propTypes = {
  founder: PropTypes.string.isRequired,
  setFounder: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};
