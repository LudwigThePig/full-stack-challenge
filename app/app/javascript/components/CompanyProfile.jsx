/* eslint-disable camelcase */
import React, { Component, Fragment } from 'react';
import Navbar from '../templates/Navbar';
import companyType from '../types/company';
import { formatYMD } from '../helpers/date';
import Modal from './profileComponents/EditModal';

class CompanyProfile extends Component {
  static deleteProject(id) {
    const options = {
      method: 'DELETE',
    };

    return fetch(`/companies/${id}`, options)
      .then(res => res.text())
      .then(console.log)
      .catch(console.error);
  }

  constructor(props) {
    super(props);
    const {
      id, founded_date, name, city, state, description,
    } = this.props.company;

    this.state = {
      id,
      founded_date,
      name,
      city,
      state,
      description,
      modal: true,
    };
  }

  render() {
    const {
      id, founded_date, name, city, state, description, modal,
    } = this.state;

    const formatedDate = founded_date !== null ? formatYMD(founded_date) : '';

    return (
      <Fragment>
        <Navbar />

        {modal ? <Modal /> : null}

        <div className="company-profile">
          <h1>{name}</h1>

          <div className="row">
            <p>{formatedDate}</p>
            <p>{`${city}, ${state}`}</p>
            <button type="button" onClick={() => { this.setState({ modal: !modal }); }}>
              Edit
            </button>
            <button type="button" onClick={() => CompanyProfile.deleteProject(id)}>
              Delete
            </button>
          </div>

          <hr />

          <p className="description">{description}</p>
        </div>
      </Fragment>
    );
  }
}

export default CompanyProfile;

CompanyProfile.propTypes = {
  ...companyType,
};
