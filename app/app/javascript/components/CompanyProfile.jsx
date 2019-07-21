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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  toggleModal() {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  render() {
    const {
      id, founded_date, name, city, state, description, modal,
    } = this.state;

    const formatedDate = founded_date !== null ? formatYMD(founded_date) : '';

    return (
      <Fragment>
        <Navbar />
        <Modal
          state={this.state}
          save={() => {}}
          exit={this.toggleModal}
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
