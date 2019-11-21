import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Loader} from 'semantic-ui-react';
import AccountInfo from './AccountInfo';
import AccountMenu from './AccountMenu';
import {selectAccount, selectAccountLoading} from '../../imports/ducks/account';

class Home extends Component {
  render() {
    const {account, loading} = this.props;

    if(loading) {
      return <Loader active/>;
    }

    return (
      <div>
        <AccountInfo account={account} />
        <AccountMenu account={account} />
      </div>
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
