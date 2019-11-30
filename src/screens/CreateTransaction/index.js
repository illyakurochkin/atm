import React, {Component} from 'react';
import styled from 'styled-components';
import Money from '../../imports/components/Money';
import CreateTransactionHeader from './CreateTransactionHeader';
import CreateTransactionForm from './CreateTransactionForm';

const Container = styled.div`
  width: 100%:
`;

class CreateTransaction extends Component {
  onSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <Container>
        <CreateTransactionHeader />
        <CreateTransactionForm onSubmit={this.onSubmit} />
      </Container>
    );
  }
}

CreateTransaction.propTypes = {};

export default CreateTransaction;
