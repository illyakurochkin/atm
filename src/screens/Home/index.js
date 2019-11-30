import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Loader} from 'semantic-ui-react';
import AccountInfo from './AccountInfo';
import AccountMenu from './AccountMenu';
import {selectAccount, selectAccountLoading} from '../../imports/ducks/account';
import ScreenHeader from '../../imports/components/ScreenHeader';
import {LogOutButton} from '../../imports/components/buttons';

const Container = styled.div`
  width: 100%;
`;

class Home extends Component {
  render() {
    const {account, loading} = this.props;

    if(loading) {
      return <Loader active/>;
    }

    return (
      <Container>
        <ScreenHeader title="Home">
          <LogOutButton/>
        </ScreenHeader>
        <AccountInfo account={account} />
        <AccountMenu account={account} />
      </Container>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  account: PropTypes.shape({
    number: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    client: PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  account: selectAccount(state),
  loading: selectAccountLoading(state),
});

export default connect(mapStateToProps)(Home);
