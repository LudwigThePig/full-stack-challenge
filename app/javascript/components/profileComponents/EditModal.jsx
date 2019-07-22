import React from 'react';
import PropTypes from 'prop-types';
import {
  CompanyName, City, State, FoundedDate, Description,
} from '../formComponents/index';
import companyType from '../../types/company';

const Modal = ({
  form, handler, save, exit, modal,
}) => (
  <div className={modal ? 'modal' : 'hidden'}>
    <h1>Edit Company</h1>

    <form onSubmit={save}>
      <CompanyName name={form.name} handler={handler} />
      <City city={form.city} handler={handler} />
      <State state={form.state} handler={handler} />
      <FoundedDate date={form.founded_date} handler={handler} />
      <Description description={form.description} handler={handler} />

      <div className="row">
        <button type="submit" onClick={save}>Save</button>
        <button type="button" onClick={exit}>Exit</button>
      </div>
    </form>
  </div>
);

export default Modal;

Modal.propTypes = {
  form: PropTypes.object,
  modal: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  exit: PropTypes.func.isRequired,
};
