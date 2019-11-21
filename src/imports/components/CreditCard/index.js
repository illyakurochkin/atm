import React, {Component} from 'react';
import styled from 'styled-components';
import PaymentCard from 'react-payment-card-component';
import PropTypes from 'prop-types';

const Container = styled.div`
  padding-bottom: 40px;
`;

class CreditCard extends Component {
  render() {
    const {card, name} = this.props;

    return (
      <Container>
        <PaymentCard
          brand="mastercard"
          number={card}
          holderName={name}
          expiration="12/20"
        />
      </Container>
    );
  }
}

CreditCard.propTypes = {
  card: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CreditCard;
