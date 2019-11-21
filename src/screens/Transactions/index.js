import React, {Component} from 'react';
import styled from 'styled-components';
import TransactionsHeader from './TransactionsHeader';
import TransactionsList from './TransactionsList';

const Container = styled.div`
  width: 100%;
`;

class Transactions extends Component {
  render() {
    return (
      <Container>
        <TransactionsHeader />
        <TransactionsList />
      </Container>
    );
  }
}

Transactions.propTypes = {};

export default Transactions;
