import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Money from '../../imports/components/Money';
import {downloadWithdrawal} from '../../imports/utils/withdrawal';

class CreateTransaction extends Component {
  componentDidMount() {
    downloadWithdrawal(100);
  }

  render() {
    return (
      <div>
        CREATE TRANSACTION
        <Money amount={100} />
      </div>
    );
  }
}

CreateTransaction.propTypes = {};

export default CreateTransaction;
