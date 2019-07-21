/* eslint-disable camelcase */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../templates/Navbar';
import companyType from '../types/company';
import { formatYMD } from '../helpers/date';
import Modal from './profileComponents/EditModal';

class CompanyProfile extends Component {
  static deleteProject(id) {
    const options = { method: 'DELETE' };

    return fetch(`/companies/${id}`, options)
      .then(res => res.text())
      .then((data) => { window.location = '/'; })
      .catch(console.error);
  }


  constructor(props) {
    super(props);

    /*        __Shape of `company` Object__
    id, founded_date, name, city, state, description  */
    const { company } = this.props;

    this.state = {
      ...company,
      modal: true,
      formData: {
        ...company,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSave = this.handleFormSave.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }


  handleInputChange(e) {
    const { name, value } = e.target;
    const { formData } = this.state;
    formData[name] = value;
    this.setState({
      formData,
    });
  }


  handleFormSave(e) {
    e.preventDefault();
    const { formData } = this.state;
    const changedFields = Object.keys(formData)
      .filter(key => this.state[key] !== formData[key])
      .reduce((acc, key) => { acc[key] = formData[key]; return acc; }, {});

    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ company: changedFields }),
    };

    return fetch(`/companies/${formData.id}`, options)
      .then(data => console.log(data))
      .then(console.log)
      .catcch(console.error);
  }


  toggleModal() {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }


  render() {
    const {
      id, founded_date, name, city, state, description, modal, formData,
    } = this.state;

    const formatedDate = founded_date !== null ? formatYMD(founded_date) : '';

    return (
      <Fragment>
        <Navbar />
        <Modal
          form={formData}
          modal={modal}
          save={this.handleFormSave}
          exit={this.toggleModal}
          handler={this.handleInputChange}
        />

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
