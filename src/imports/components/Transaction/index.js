import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Header, Icon} from 'semantic-ui-react';

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

class Transaction extends Component {
  renderIcon() {
    const {transaction: {amount}} = this.props;
    const name = amount > 0 ? 'angle double down' : 'angle double up';
    const color = amount > 0 ? 'green' : 'red';
    return <Icon size="huge" name={name} color={color}/>;
  }

  render() {
    const {transaction: {source, amount, commission, dateTime}} = this.props;

    return (
      <Header inverted>
        <Grid>
          {this.renderIcon()}
          <Content>
            <div>{source}</div>
            <div>{`Amount: $${Math.abs(amount)}`}</div>
            <div>{`Commission: $${commission}`}</div>
            <div>{`Date: ${dateTime}`}</div>
          </Content>
        </Grid>
      </Header>
    );
  }
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    source: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    commission: PropTypes.string.isRequired,
  }).isRequired,
};

export default Transaction;
