import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CompanyName, City, State, FoundedDate, Description,
} from '../formComponents/index';

const Modal = ({ state, save, exit }) => {
  const [name, setName] = useState(state.name);
  const [city, setCity] = useState(state.city);
  const [usState, setState] = useState(state.state);
  const [date, setDate] = useState(state.date);
  const [description, setDescription] = useState(state.description);

  return (
    <div className={state.modal ? 'modal' : 'hidden'}>
      <h1>Edit Company</h1>
      <CompanyName name={name} handler={setName} />
      <City city={city} handler={setCity} />
      <State state={usState} handler={setState} />
      <FoundedDate date={date} handler={setDate} />
      <Description description={description} handler={setDescription} />
      <div className="row">
        <button type="button" onClick={save}>Save</button>
        <button type="button" onClick={exit}>Exit</button>
      </div>
    </div>
  );
};

export default Modal;
