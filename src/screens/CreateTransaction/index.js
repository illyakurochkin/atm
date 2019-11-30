import React from 'react';
import styled from 'styled-components';
import CreateTransactionHeader from './CreateTransactionHeader';
import CreateTransactionForm from './CreateTransactionForm';
import {connect, useDispatch} from 'react-redux';
import atm from './../../imports/lib/atm';
import {useAlert} from 'react-alert';
import {setScreenAction} from '../../imports/ducks/router/actions';

const Container = styled.div`
  width: 100%;
`;

const CreateTransaction = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const onSubmit = (values) => atm.transactions.create(values)
    .then(() => dispatch(setScreenAction('transactions')))
    .then(() => alert.success('transaction was created'))
    .catch(message => alert.error(message));

  return (
    <Container>
      <CreateTransactionHeader/>
      <CreateTransactionForm onSubmit={onSubmit}/>
    </Container>
  );
};

CreateTransaction.propTypes = {};

export default connect()(CreateTransaction);
