import React, { Component } from 'react';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: this.props
    }
  }
  render() {
    console.log(this.props)
    const { companies } = this.state;
    return (

      <ul>
        <li>Company One</li>
        <li>Company Two</li>
      </ul>
    )
  }
} 

export default Companies;