import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button, Header, Icon} from 'semantic-ui-react';
import {logoutAction} from '../../imports/ducks/account';
import {connect} from 'react-redux';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;
  width: 100%;
  padding-left: 20px;
`;

const HomeHeader = ({logout}) => (
  <Container>
    <Header size="huge" inverted>Bank Account</Header>
    <Button inverted onClick={logout}>
      <Icon name="log out"/>
      Log Out
    </Button>
  </Container>
);

HomeHeader.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  logout: logoutAction,
};

export default connect(null, mapDispatchToProps)(HomeHeader);
