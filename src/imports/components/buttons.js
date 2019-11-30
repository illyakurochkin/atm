import {setScreenAction} from '../ducks/router/actions';
import {Button, Icon} from 'semantic-ui-react';
import React from 'react';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../ducks/account';

export const HomeButton = () => {
  const dispatch = useDispatch();

  return (
    <Button inverted onClick={() => dispatch(setScreenAction('home'))}>
      <Icon name="backward icon"/>
      Go Home
    </Button>
  );
};

export const LogOutButton = () => {
  const dispatch = useDispatch();

  return (
    <Button inverted onClick={() => dispatch(logoutAction())}>
      <Icon name="log out"/>
      Log Out
    </Button>
  );
};

export const TransactionsButton = () => {
  const dispatch = useDispatch();

  return (
    <Button inverted onClick={() => dispatch(setScreenAction('transactions'))}>
      <Icon name="backward icon" />
      Back to Transactions
    </Button>
  );
};
