import React, {Component} from 'react';
import styled from 'styled-components';
import TransactionsList from './TransactionsList';
import CreateTransactionButton from './CreateTransactionButton';
import ScreenHeader from '../../imports/components/ScreenHeader';
import {HomeButton} from '../../imports/components/buttons';

const Container = styled.div`
  width: 100%;
`;

class Transactions extends Component {
  render() {
    return (
      <Container>
        <ScreenHeader title="Transactions">
          <HomeButton />
        </ScreenHeader>
        <TransactionsList />
        <CreateTransactionButton />
      </Container>
    );
  }
}

Transactions.propTypes = {};

export default Transactions;
