import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ team }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        {/* <Link className="card-title" to={`/england/${countrie.idLeague}`}>
          <span>
            <img
              src={countrie.strBadge}
              alt=""
              width="64"
              height="64"
              className="mr-3"
            />
          </span>
          {countrie.strLeague}
        </Link>
        <p className="card-text">
          <span className="font-weight-bold">Country: </span>
          {countrie.strCountry}
        </p>
        <p className="card-text">
          <span className="font-weight-bold">Since:</span>
          {countrie.intFormedYear}
        </p> */}
      </div>
    </div>
  );
};

export default TeamCard;
