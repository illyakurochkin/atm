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

class CreateTransactionHeader extends Component {
  render() {
    const {setScreen} = this.props;

    return (
      <Container>
        <Header inverted size="huge">Create transaction</Header>
        <Button inverted onClick={() => setScreen('transactions')}>
          <Icon name="backward icon" />
          Back to Transactions
        </Button>
      </Container>
    );
  }
}

CreateTransactionHeader.propTypes = {
  setScreen: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setScreen: setScreenAction,
};

export default connect(null, mapDispatchToProps)(CreateTransactionHeader);
