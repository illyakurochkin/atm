import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CreditCard from '../../imports/components/CreditCard';
import {Header, Icon} from 'semantic-ui-react';

const renderCard = ({number: card, client}) => {
  const name = `${client.firstname} ${client.lastname}`;
  return <CreditCard card={card} name={name}/>;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SummaryContainer = styled.div`
  padding-bottom: 20px;
  padding-right: 40px;
`;

const Container = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: row;
`;

const Label = styled.span`
  padding: 0 20px;
`;

const renderAmount = ({amount}) => (
  <Header inverted>
    <Container>
      <Icon name="money bill alternate outline"/>
      <Label>Amount:</Label>
      ${Number(amount / 100).toFixed(2)}
    </Container>
  </Header>
);

const renderType = ({type}) => (
  <Header inverted>
    <Container>
      <Icon name="credit card outline"/>
      <Label>Type:</Label>
      {type.toLowerCase()}
    </Container>
  </Header>
);

const renderCreditLimit = ({type, creditLimit}) => {
  if (type !== 'CREDIT') {
    return null;
  }

  return (
    <Header inverted>
      <Container>
        <Icon name="dont"/>
        <Label>Credit limit:</Label>
        ${creditLimit}
      </Container>
    </Header>
  );
};

const renderSupplier = ({supplierName}) => {
  if (!supplierName) {
    return null;
  }

  return (
    <Header inverted>
      <Container>
        <Icon name="hand spock outline"/>
        <Label>Supplier name:</Label>
        {supplierName}
      </Container>
    </Header>
  );
};

const AccountInfo = ({account}) => (
  <Wrapper>
    <SummaryContainer>
      {renderAmount(account)}
      {renderType(account)}
      {renderCreditLimit(account)}
      {renderSupplier(account)}
    </SummaryContainer>
    {renderCard(account)}
  </Wrapper>
);

AccountInfo.propTypes = {
  account: PropTypes.object.isRequired,
};

export default AccountInfo;
