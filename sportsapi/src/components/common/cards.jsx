import React from "react";

const SportCard = ({ countrie }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">
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
        </h5>
        <p className="card-text">
          <span className="font-weight-bold">Country: </span>
          {countrie.strCountry}
        </p>
        <p className="card-text">
          <span className="font-weight-bold">Since:</span>
          {countrie.intFormedYear}
        </p>
        <p className="card-text">
          <span className="font-weight-bold">Description:</span>
          {countrie.strDescriptionEN}
        </p>
      </div>
    </div>
  );
};

export default SportCard;
