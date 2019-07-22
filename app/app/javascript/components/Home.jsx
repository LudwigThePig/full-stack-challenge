import React, { Component, Fragment } from 'react';
import CompanyType from '../types/company';
import Company from './homeComponents/Company';
import Navbar from '../templates/Navbar';

class Home extends Component {
  constructor(props) {
    super(props);

    const { companies } = this.props;

    this.state = {
      companies,
    };
  }

  render() {
    const { companies } = this.state;
    return (
      <Fragment>
        <Navbar />
        <ul>
          {companies.map(company => <Company key={company.id} {...company} />)}
          <button type="button" onClick={() => { window.location = '/companies/new'; }}>Add Company</button>
        </ul>
      </Fragment>
    );
  }
}

export default Home;

Home.propTypes = {
  // companies: CompanyType.isRequired,
};
