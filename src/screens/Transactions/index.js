import React, {Component} from 'react';
import styled from 'styled-components';
import TransactionsHeader from './TransactionsHeader';
import TransactionsList from './TransactionsList';
import CreateTransactionButton from './CreateTransactionButton';

const Container = styled.div`
  width: 100%;
`;

class Transactions extends Component {
  render() {
    return (
      <Container>
        <TransactionsHeader />
        <TransactionsList />
        <CreateTransactionButton />
      </Container>
    );
  }
}

Transactions.propTypes = {};

export default Transactions;
