import React from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const CreditCard = ({ number, expiry, cvc, name, focus }) => {
  return (
    <div>
      <Cards
        number={number}
        expiry={expiry}
        cvc={cvc}
        name={name}
        focused={focus}
      />
    </div>
  );
};

export default CreditCard;