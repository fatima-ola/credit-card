import React from "react";

const CreditCard = ({ cardInfo }) => {
  return (
    <div className="card">
      <div className="wrapper">
        <h3 className="card-title">{cardInfo.bankName}</h3>
        <div className="card-number-wrapper">
          <p className="card-number">{cardInfo.creditCardNumber}</p>
          <p className="card-number-2">1234</p>
        </div>
        <div className="validity-info">
          <div className="valid">
            <div className="valid-thru">
              <p>VALID</p>
              <p>THRU</p>
            </div>
            <span className="expiry-date">{cardInfo.expiryDate}</span>
          </div>
        </div>
        <h3 className="holder-name">{cardInfo.personName}</h3>
      </div>
    </div>
  );
};

export default CreditCard;
