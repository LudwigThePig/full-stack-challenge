//= require ./components/templates
import React from 'react';
import Navbar from '../templates/Navbar';
import {
  CompanyName, City, State, FoundedDate, Description,
} from './formComponents/index';

class NewCompanyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      city: '',
      state: '',
      date: '',
      description: '',
    };
  }

  render() {
    const {
      companyName, city, state, date, description,
    } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <form>
          <h1>Add New Company</h1>
          <CompanyName companyName={companyName} />
          <City city={city} />
          <State state={state} />
          <FoundedDate date={date} />
          <Description description={description} />

          <input type="submit" value="Save" />
        </form>
      </React.Fragment>
    );
  }
}

export default NewCompanyForm;
