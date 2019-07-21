//= require ./components/templates
import React, { Component, Fragment } from 'react';
import Navbar from '../templates/Navbar';
import {
  CompanyName, City, State, FoundedDate, Description,
} from './formComponents/index';

class NewCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
      state: 'CO',
      founded_date: '',
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
    if (formData.founded_date.length === 0) {
      delete formData.founded_date;
    } else {
      formData.founded_date = new Date(formData.founded_date);
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
      body: JSON.stringify(formData),
    };

    fetch('/companies', options)
      .then((res) => { window.location = res.url; })
      .catch(console.error);
  }

  render() {
    const {
      name, city, state, founded_date, description,
    } = this.state;
    return (
      <Fragment>
        <Navbar />
        <form method="post" action="/companies" onSubmit={this.handleSubmit}>
          <h1>Add New Company</h1>
          <div className="row">
            <CompanyName companyName={name} handler={this.handleInputChange} />
          </div>

          <div className="row">
            <City city={city} handler={this.handleInputChange} />
            <State state={state} handler={this.handleInputChange} />
            <FoundedDate date={founded_date} handler={this.handleInputChange} />
          </div>
          <Description description={description} handler={this.handleInputChange} />

          <button type="submit" onSubmit={this.handleSubmit}>
            Save
          </button>
        </form>
      </Fragment>
    );
  }
}

export default NewCompanyForm;
