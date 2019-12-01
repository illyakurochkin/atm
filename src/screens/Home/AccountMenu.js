import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button as SemanticButton, Icon} from 'semantic-ui-react';
import {fetchTransactionsAction, selectTransactionsLoading} from '../../imports/ducks/transactions';
import {setScreenAction} from '../../imports/ducks/router/actions';
import {connect} from 'react-redux';
import {selectAccount} from '../../imports/ducks/account';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  width: 100%;
  padding-top: 30px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const ButtonContainer = styled.div`
  padding: 15px;
  width: 100%;
`;

const Button = styled(SemanticButton)`
  width: 100%;
`;

class AccountMenu extends Component {
  renderGetPutMoney() {
    const {setScreen, account} = this.props;

    if (account.type === 'DEPOSIT') {
      return null;
    }

    return (
      <Row>
        <ButtonContainer>
          <Button inverted size="huge">
            <Icon name="angle up" />
            Put money
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button inverted size="huge" onClick={() => setScreen('getMoney')}>
            <Icon name="angle down" />
            Get money
          </Button>
        </ButtonContainer>
      </Row>
    );
  }

  onTransactionsClick = async () => {
    const {fetchTransactions, setScreen} = this.props;
    await fetchTransactions();
    setScreen('transactions');
  };

  render() {
    const {transactionsLoading} = this.props;

    return (
      <Container>
        {this.renderGetPutMoney()}
        <Row>
          <ButtonContainer>
            <Button loading={transactionsLoading} inverted size="huge" onClick={this.onTransactionsClick}>
              <Icon name="exchange" />
              Transactions
            </Button>
          </ButtonContainer>
        </Row>
      </Container>
    );
  }
}

AccountMenu.propTypes = {
  account: PropTypes.object.isRequired,
  transactionsLoading: PropTypes.bool.isRequired,
  setScreen: PropTypes.func.isRequired,
  fetchTransactions: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  account: selectAccount(state),
  transactionsLoading: selectTransactionsLoading(state),
});

const mapDispatchToProps = {
  setScreen: setScreenAction,
  fetchTransactions: fetchTransactionsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu);
