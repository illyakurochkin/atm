import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectScreen} from './imports/ducks/router';
import {setScreenAction} from './imports/ducks/router';

const Container = styled.div`
  width: 500px;
  height: 700px;
  margin: 60px auto;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  background-color: #4C4A48;
  padding-top: 100px;
`;

const App = ({Screen, setScreen}) => (
  <Container>
    <Screen setScreen={setScreen}/>
  </Container>
);

App.propTypes = {
  screen: PropTypes.func,
};

const mapStateToProps = state => ({
  Screen: selectScreen(state),
});

const mapDispatchToProps = {
  setScreen: setScreenAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
