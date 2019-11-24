import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Header, Icon} from 'semantic-ui-react';
import {setScreenAction} from '../../imports/ducks/router/actions';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  padding-left: 20px;
`;

class TransactionsHeader extends Component {
  render() {
    const {setScreen} = this.props;

    return (
      <Container>
        <Header inverted size="huge">Transactions</Header>
        <Button inverted onClick={() => setScreen('home')}>
          <Icon name="backward icon" />
          Go Home
        </Button>
      </Container>
    );
  }
}

TransactionsHeader.propTypes = {
  setScreen: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setScreen: setScreenAction,
};

export default connect(null, mapDispatchToProps)(TransactionsHeader);
