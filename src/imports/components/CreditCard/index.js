import React, {Component} from 'react';
import PaymentCard from 'react-payment-card-component';
import PropTypes from 'prop-types';

class CreditCard extends Component {
  render() {
    const {card, name} = this.props;

    return (
      <div>
        <PaymentCard
          brand="mastercard"
          number={card}
          holderName={name}
          expiration="12/20"
        />
      </div>
    );
  }
}

CreditCard.propTypes = {
  card: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CreditCard;
