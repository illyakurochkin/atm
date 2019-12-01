import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Field, formValueSelector, getFormSyncErrors, reduxForm} from 'redux-form';
import {Button, Form, Message} from 'semantic-ui-react';
import {normalizeAmount, normalizeCard} from '../../imports/utils/forms/normalizers';
import {validateAmount, validateReceiverCard} from '../../imports/utils/forms/validators';
import {selectAccount} from '../../imports/ducks/account';
import store from '../../imports/ducks/store';

const validateCard = (receiverCard) => {
  console.log('validator state', store.getState());
  const myCard = selectAccount(store.getState()).number;
  return validateReceiverCard(myCard)(receiverCard);
};

const GetMoneyForm = ({handleSubmit, amount, receiverCard, errors}) => (
  <Form inverted onSubmit={handleSubmit} error={errors.length}>
    <Field
      name="receiverCard"
      component={renderReceiverCardField}
      normalize={normalizeCard(receiverCard)}
      validate={validateCard}
    />
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

GetMoneyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  myCard: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  receiverCard: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
};

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
  myCard: selectAccount(state).number,
  amount: selector(state, 'amount'),
  receiverCard: selector(state, 'receiverCard'),
  errors: Object.values(getFormSyncErrors(form)(state)),
});

const Connected = connect(mapStateToProps)(GetMoneyForm);

export default reduxForm({form})(Connected);

