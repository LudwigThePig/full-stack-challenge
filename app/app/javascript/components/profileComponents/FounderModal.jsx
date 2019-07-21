import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FounderForm from './FounderForm';

const FounderModal = ({
  modal, exit, id, addFounder,
}) => {
  const [founder, setFounder] = useState('');
  const [title, setTitle] = useState('');

  const add = (e) => {
    e.preventDefault();
    const body = {
      founder: {
        founder,
        title,
        company_id: id,
      },
    };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
    console.log(options);

    return fetch('/founders', options)
      .then(() => {
        exit(false);
        addFounder({ founder, title });
      })
      .catch(console.error);
  };

  return (
    <div className={modal ? 'modal' : 'hidden'}>
      <h1>Add Founder</h1>

      <form onSubmit={add}>
        <FounderForm
          founder={founder}
          setFounder={setFounder}
          title={title}
          setTitle={setTitle}
        />

        <div className="row">
          <button type="submit" onClick={add}>Add</button>
          <button type="button" onClick={() => exit(false)}>Exit</button>
        </div>
      </form>
    </div>
  );
};

export default FounderModal;

FounderModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  exit: PropTypes.func.isRequired,
  addFounder: PropTypes.func.isRequired,
};
