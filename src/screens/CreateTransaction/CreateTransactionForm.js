import React from 'react';
import {connect} from 'react-redux';
import {Field, formValueSelector, getFormSyncErrors, reduxForm} from 'redux-form';
import {Form} from 'semantic-ui-react';
import {normalizeAmount, normalizeCard} from '../../imports/utils/forms/normalizers';
import {validateAmount, validateReceiverCard} from '../../imports/utils/forms/validators';
import {selectAccount} from '../../imports/ducks/account';

const CreateTransactionForm = ({handleSubmit, myCard, amount, receiverCard, errors}) => (
  <Form inverted onSubmit={handleSubmit} error={errors.length}>
    <Field
      name="receiverCard"
      component={renderReceiverCardField}
      normalize={normalizeCard(receiverCard)}
      validate={validateReceiverCard(myCard)}
    />
    <Field
      name="amount"
      component={renderAmountField}
      normalize={normalizeAmount(amount)}
      validate={validateAmount}
    />
  </Form>
);

const renderReceiverCardField = (field) => (
  <Form.Field>
    <label>RECEIVER CARD NUMBER</label>
    <input {...field.input} placeholder="Enter receiver card number"/>
  </Form.Field>
);

const renderAmountField = (field) => (
  <Form.Field>
    <label>MONEY AMOUNT TO SEND</label>
    <input {...field.input} placeholder="Enter money amount to send"/>
  </Form.Field>
);

const form = 'createTransaction';
const selector = formValueSelector(form);

const mapStateToProps = state => ({
  myCard: selectAccount(state).card,
  amount: selector(state, 'amount'),
  receiverCard: selector(state, 'receiverCard'),
  errors: Object.values(getFormSyncErrors(form)(state)),
});

const Connected = connect(mapStateToProps)(CreateTransactionForm);

export default reduxForm({form})(Connected);

