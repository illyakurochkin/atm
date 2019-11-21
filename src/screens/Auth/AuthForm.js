import React, {Component} from 'react';
import {Field, formValueSelector, getFormSyncErrors, reduxForm} from 'redux-form';
import {Form, Button, Message} from 'semantic-ui-react';
import {normalizeCard, normalizePin} from '../../imports/utils/forms/normalizers';
import {validateCard, validatePin} from '../../imports/utils/forms/validators';
import {connect} from 'react-redux';

class AuthForm extends Component {
  renderCardField = (field) => (
    <Form.Field>
      <label>CARD NUMBER</label>
      <input {...field.input} placeholder='Enter your card number'/>
    </Form.Field>
  );

  renderPinField = (field) => (
    <Form.Field>
      <label>PIN CODE</label>
      <input {...field.input} type="password" placeholder='Enter pin code'/>
    </Form.Field>
  );

  render() {
    const {handleSubmit, card, pin, errors} = this.props;

    return (
      <Form inverted onSubmit={handleSubmit} error={errors.length}>
        <Field
          name="card"
          component={this.renderCardField}
          normalize={normalizeCard(card)}
          validate={validateCard}
        />
        <Field
          name="pin"
          component={this.renderPinField}
          normalize={normalizePin(pin)}
          validate={validatePin}
        />
        <Message error header="error" list={errors} />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.form);
  return ({
    card: formValueSelector('auth')(state, 'card'),
    pin: formValueSelector('auth')(state, 'pin'),
    errors: Object.values(getFormSyncErrors('auth')(state)),
  });
};

const Connected = connect(mapStateToProps)(AuthForm);

export default reduxForm({form: 'auth'})(Connected);

