import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button, Icon} from 'semantic-ui-react';

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
    console.log('CREATE TRANSACTION');
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

CreateTransactionButton.propTypes = {};

export default CreateTransactionButton;
