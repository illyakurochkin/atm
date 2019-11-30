import React from 'react';
import {Field, formValueSelector, getFormSyncErrors, reduxForm} from 'redux-form';
import {Button, Form, Message} from 'semantic-ui-react';
import {normalizeCard, normalizePin} from '../../imports/utils/forms/normalizers';
import {validateCard, validatePin} from '../../imports/utils/forms/validators';
import {connect} from 'react-redux';

const renderCardField = (field) => (
  <Form.Field>
    <label>CARD NUMBER</label>
    <input {...field.input} placeholder='Enter your card number'/>
  </Form.Field>
);

const renderPinField = (field) => (
  <Form.Field>
    <label>PIN CODE</label>
    <input {...field.input} type="password" placeholder='Enter pin code'/>
  </Form.Field>
);

const AuthForm = ({handleSubmit, card, pin, errors}) => (
  <Form inverted onSubmit={handleSubmit} error={errors.length}>
    <Field
      name="card"
      component={renderCardField}
      normalize={normalizeCard(card)}
      validate={validateCard}
    />
    <Field
      name="pin"
      component={renderPinField}
      normalize={normalizePin(pin)}
      validate={validatePin}
    />
    <Message error header="error" list={errors}/>
    <Button type="submit">Submit</Button>
  </Form>
);

const form = 'auth';
const selector = formValueSelector(form);

const mapStateToProps = (state) => ({
  card: selector(state, 'card'),
  pin: selector(state, 'pin'),
  errors: Object.values(getFormSyncErrors(form)(state)),
});

const Connected = connect(mapStateToProps)(AuthForm);

export default reduxForm({form})(Connected);

