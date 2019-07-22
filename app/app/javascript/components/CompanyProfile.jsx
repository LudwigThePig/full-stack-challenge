/* eslint-disable camelcase */
import React, { Component, Fragment } from 'react';
import Navbar from '../templates/Navbar';
import companyType from '../types/company';
import { formatYMD } from '../helpers/date';
import Modal from './profileComponents/EditModal';
import Founders from './profileComponents/Founders';


/** A Note On This Class
 *
 *    If you notice, there are two very simllar forms in
 * this class that were constructed with different styles.
 *    First, the EditForm was constructed with handlers and state
 * that is controlled by this class.
 *    Second, the FounderForm's state and handler are controlled with
 * hooks in a child class. This is how I should have built out
 * the edit form (happy to explain why).I would refactor that now
 * but my time is better spent learning Ruby and Rails!
 *
 * Cheers, Morgan.
 *
 */


class CompanyProfile extends Component {
  static deleteProject(id) {
    const options = { method: 'DELETE' };

    return fetch(`/companies/${id}`, options)
      .then(res => res.text())
      .then(() => { window.location = '/'; })
      .catch(console.error);
  }


  constructor(props) {
    super(props);

    /*        __Shape of `company` Object__
    id, founded_date, name, city, state, description  */
    const { company, founders } = this.props;

    this.state = {
      ...company,
      modal: false,
      formData: {
        ...company,
      },
      founders,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSave = this.handleFormSave.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.addFounder = this.addFounder.bind(this);
  }

  addFounder(newFounder) {
    const { founders } = this.state;
    this.setState({
      founders: [...founders, newFounder],
    });
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
      .then(() => {
        this.toggleModal();
        this.setState({ ...formData });
      })
      .catch(console.error);
  }


  toggleModal() {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  render() {
    const {
      id, founded_date, name, city, state, description, modal, formData, founders,
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
            <p className="right-bar">{`${city}, ${state}`}</p>
            <button type="button" onClick={() => { this.setState({ modal: !modal }); }}>
            Edit
            </button>
            <button type="button" onClick={() => CompanyProfile.deleteProject(id)}>
              Delete
            </button>
          </div>
          <hr />
          <p className="description">{description}</p>

          <Founders
            founders={founders}
            addFounder={this.addFounder}
            id={id}
          />
        </div>
      </Fragment>
    );
  }
}

export default CompanyProfile;

CompanyProfile.propTypes = {
  ...companyType,
};
