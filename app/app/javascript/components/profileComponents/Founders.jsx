import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FounderModal from './FounderModal';

const Founders = ({ founders, id, addFounder }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="founders-container">
      <h2>Founders</h2>
      <div className="row">
        <FounderModal
          modal={modal}
          exit={setModal}
          id={id}
          addFounder={addFounder}
        />
        <div className="founders-list row">
          { founders.map(({ founder, title }) => <p>{`${founder} : ${title}`}</p>) }
        </div>
        <button
          type="button"
          onClick={() => setModal(!modal)}
        >
          Add Founder
        </button>
      </div>
    </div>
  );
};
export default Founders;

const founderType = {
  founder: PropTypes.string,
  title: PropTypes.string,
};

Founders.propTypes = {
  founders: PropTypes.arrayOf(founderType).isRequired,
  id: PropTypes.number.isRequired,
  addFounder: PropTypes.func.isRequired,
};
