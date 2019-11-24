import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {setScreenAction} from '../../imports/ducks/router/actions';

const Container = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

class CreateTransactionButton extends Component {
  onClick = () => {
    const {setScreen} = this.props;
    setScreen('createTransaction');
  };

  render() {
    return (
      <Container>
        <Button inverted size="huge" onClick={this.onClick}>
          <Icon name="angle up" />
          Create transaction
        </Button>
      </Container>
    );
  }
}

CreateTransactionButton.propTypes = {
  setScreen: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setScreen: setScreenAction,
};

export default connect(null, mapDispatchToProps)(CreateTransactionButton);
