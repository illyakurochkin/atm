import React, {Component} from 'react';
import styled from 'styled-components';
import AuthForm from './AuthForm';
import {connect} from 'react-redux';
import {loginAction} from '../../imports/ducks/account';

const Container = styled.div`
  width: 300px;
  height: 200px;
`;

class Auth extends Component {
  onSubmit = ({card, pin}) => {
    const {login, setScreen} = this.props;
    setScreen('home');
    return login(card, pin);
  };

  render() {
    return (
      <Container>
        <AuthForm onSubmit={this.onSubmit}/>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  login: loginAction,
};

export default connect(null, mapDispatchToProps)(Auth);
