import React from 'react';
import PropTypes from 'prop-types';
import CreditCard from '../../imports/components/CreditCard';
import {Header, Icon} from 'semantic-ui-react';

const renderCard = ({number: card, client}) => {
  const name = `${client.firstname} ${client.lastname}`;
  return <CreditCard card={card} name={name} />;
};

const renderAmount = ({amount}) => (
  <Header inverted>
    <Icon name="money bill alternate outline" />
    {amount}$
  </Header>
);

const renderType = ({type}) => (
  <Header inverted>
    <Icon name="credit card outline" />
    {type}
  </Header>
);

const renderCreditLimit = ({type, creditLimit}) => {
  if(type !== "CREDIT") {
    return null;
  }

  return (
    <Header inverted>
      <Icon name="" />
      credit limit - {creditLimit}$
    </Header>
  );
};

const AccountInfo = ({account}) => (
  <div>
    {renderCard(account)}
    {renderAmount(account)}
    {renderType(account)}
    {renderCreditLimit(account)}
  </div>
);

AccountInfo.propTypes = {
  account: PropTypes.object.isRequired,
};

export default AccountInfo;
