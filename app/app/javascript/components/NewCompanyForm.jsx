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
      state: 'CO',
      date: '',
      description: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = this.state;
    formData.date = new Date(formData.date);
    console.log(formData);
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
          <div className="row">
            <CompanyName companyName={companyName} handler={this.handleInputChange} />
          </div>
          <div className="row">
            <City city={city} handler={this.handleInputChange} />
            <State state={state} handler={this.handleInputChange} />
            <FoundedDate date={date} handler={this.handleInputChange} />
          </div>
          <Description description={description} handler={this.handleInputChange} />

          <input
            type="submit"
            value="Save"
            onSubmit={this.handleSubmit}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default NewCompanyForm;
