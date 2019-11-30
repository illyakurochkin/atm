import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectScreen} from './imports/ducks/router';
import {setScreenAction} from './imports/ducks/router/actions';
import AlertProvider from './imports/components/AlertProvider';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(33,30,27);
  background: linear-gradient(25deg, rgba(33,30,27,1) 3%, rgba(57,49,54,1) 34%, rgba(59,43,70,1) 66%, rgba(55,23,98,1) 100%);
`;

const Container = styled.div`
  width: 660px;
  margin: 60px auto;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const App = ({Screen, setScreen}) => (
  <AlertProvider>
    <Wrapper>
      <Container>
        <Screen setScreen={setScreen}/>
      </Container>
    </Wrapper>
  </AlertProvider>
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
