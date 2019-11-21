import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectTransactions} from '../../imports/ducks/transactions';
import Transaction from '../../imports/components/Transaction';
import {Header} from 'semantic-ui-react';

const ListContainer = styled.div`
  max-height: 300px;
  overflow-y: scroll;
`;

class TransactionsList extends Component {
  renderTransaction = transaction => <Transaction transaction={transaction} />;

  renderList() {
    const {transactions} = this.props;

    return (
      <ListContainer>
        {transactions.map(this.renderTransaction)}
      </ListContainer>
    );
  }

  render() {
    return (
      <div>
        <Header inverted size="big" style={{paddingLeft: 20}}>Transactions list</Header>
        {this.renderList()}
      </div>
    );
  }
}

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  transactions: selectTransactions(state),
});

export default connect(mapStateToProps)(TransactionsList);
