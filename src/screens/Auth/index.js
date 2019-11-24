import React from 'react';
import styled from 'styled-components';
import AuthForm from './AuthForm';
import {connect} from 'react-redux';
import {loginAction} from '../../imports/ducks/account';
import {Header} from 'semantic-ui-react';

const Container = styled.div`
  width: 400px;
`;

const Auth = ({login, setScreen}) => {
  const onSubmit = ({card, pin}) => login(card, pin)
    .then(() => setScreen('home'));

  return (
    <Container>
      <Header inverted size="huge">Authorize</Header>
      <AuthForm onSubmit={onSubmit}/>
    </Container>
  );
};

const mapDispatchToProps = {
  login: loginAction,
};

export default connect(null, mapDispatchToProps)(Auth);
