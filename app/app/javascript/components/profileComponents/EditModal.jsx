import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CompanyName, City, State, FoundedDate, Description,
} from '../formComponents/index';

const Modal = ({
  state, handler, save, exit,
}) => (
  <div className={state.modal ? 'modal' : 'hidden'}>
    <h1>Edit Company</h1>

    <CompanyName name={state.name} handler={handler} />
    <City city={state.city} handler={handler} />
    <State state={state.state} handler={handler} />
    <FoundedDate date={state.date} handler={handler} />
    <Description description={state.description} handler={handler} />

    <div className="row">
      <button type="button" onClick={save}>Save</button>
      <button type="button" onClick={exit}>Exit</button>
    </div>
  </div>
);

export default Modal;
