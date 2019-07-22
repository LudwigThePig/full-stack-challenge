import React from 'react';
import CompanyType from '../../types/company';
import { formatYMD } from '../../helpers/date';

const Company = ({
  id, founded_date, name, city, state, description,
}) => {
  const date = formatYMD(founded_date);

  return (
    <li>
      <div className="row">
        <div className="nameplate">
          <h2>{ name }</h2>
          <span>{`${city}, ${state}`}</span>
        </div>
        <a href={`/companies/${id}`}>more...</a>
      </div>

      <hr />

      <p>{ description }</p>
      <span>
        {`Founded ${date}`}
      </span>
    </li>
  );
};

export default Company;

Company.propTypes = { ...CompanyType };
