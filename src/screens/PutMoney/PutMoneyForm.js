import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Field, formValueSelector, getFormSyncErrors, reduxForm} from 'redux-form';
import {Button, Form, Message} from 'semantic-ui-react';
import {normalizeAmount} from '../../imports/utils/forms/normalizers';
import {validateAmount} from '../../imports/utils/forms/validators';
import {selectAccount} from '../../imports/ducks/account';

const PutMoneyForm = ({handleSubmit, amount, errors}) => (
  <Form inverted onSubmit={handleSubmit} error={errors.length}>
    <Field
      name="amount"
      component={renderAmountField}
      normalize={normalizeAmount(amount)}
      validate={validateAmount}
    />
    <Message error header="error" list={errors}/>
    <Button type="submit">Submit</Button>
  </Form>
);

PutMoneyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  myCard: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  receiverCard: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
};

const renderAmountField = (field) => (
  <Form.Field>
    <label>MONEY AMOUNT TO PUT</label>
    <input {...field.input} placeholder="Enter money amount"/>
  </Form.Field>
);

const form = 'putMoney';
const selector = formValueSelector(form);

const mapStateToProps = state => ({
  myCard: selectAccount(state).number,
  amount: selector(state, 'amount'),
  errors: Object.values(getFormSyncErrors(form)(state)),
});

const Connected = connect(mapStateToProps)(PutMoneyForm);

export default reduxForm({form})(Connected);

