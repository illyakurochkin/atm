import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button, Icon} from 'semantic-ui-react';
import {useDispatch, useSelector} from 'react-redux';
import {selectAccount} from '../../imports/ducks/account';
import {setScreenAction} from '../../imports/ducks/router/actions';

const Container = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CreateTransactionButton = () => {
  const dispatch = useDispatch();
  const account = useSelector(selectAccount);

  if (account.type === 'DEPOSIT') {
    return null;
  }

  const onClick = () => dispatch(setScreenAction('createTransaction'));

  return (
    <Container>
      <Button inverted size="huge" onClick={onClick}>
        <Icon name="angle up"/>
        Create transaction
      </Button>
    </Container>
  );
};

CreateTransactionButton.propTypes = {
  setScreen: PropTypes.func.isRequired,
};

export default CreateTransactionButton;
