/* eslint-disable camelcase */
import React, { Component, Fragment } from 'react';
import Navbar from '../templates/Navbar';
import companyType from '../types/company';
import { formatYMD } from '../helpers/date';

class CompanyProfile extends Component {
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
    };
  }

  render() {
    const {
      founded_date, name, city, state, description,
    } = this.state;

    const formatedDate = founded_date !== null ? formatYMD(founded_date) : '';

    return (
      <Fragment>
        <Navbar />
        <div className="company-profile">
          <h1>{name}</h1>
          <div className="row">
            <p>{formatedDate}</p>
            <p>{`${city}, ${state}`}</p>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </div>
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
