//= require ./components/templates
import React from 'react';
import Navbar from '../templates/Navbar';

class NewCompanyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <form>
          <h1>Add New Company</h1>
        </form>
      </React.Fragment>
    );
  }
}

export default NewCompanyForm;
