//= require ./components/templates
import React from 'react';
import Navbar from '../templates/Navbar';

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
          <label htmlFor="companyName">
            Company Name:
            <input type="text" name="companyName" value={companyName} />
          </label>

          <label htmlFor="city">
            City:
            <input type="text" name="city" value={city} />
          </label>

          <label htmlFor="state">
            State:
            <input type="text" name="state" value={state} />
          </label>

          <label htmlFor="date">
            Founded Date:
            <input type="date" name="date" value={date} />
          </label>

          <label htmlFor="description">
            description:
            <textarea name="description" value={description} />
          </label>

          <input type="submit" value="Save" />
        </form>
      </React.Fragment>
    );
  }
}

export default NewCompanyForm;
