import React, {useState} from 'react';
import styled from 'styled-components';
import ScreenHeader from '../../imports/components/ScreenHeader';
import {HomeButton} from '../../imports/components/buttons';
import GetMoneyForm from './GetMoneyForm';
import atm from './../../imports/lib/atm';
import {useAlert} from 'react-alert';
import {useDispatch} from 'react-redux';
import {downloadWithdrawal} from '../../imports/utils/withdrawal';
import {setScreenAction} from '../../imports/ducks/router/actions';

const Container = styled.div`
  width: 100%;
`;

const GetMoney = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onSubmit = ({amount}) => {
    setLoading(true);
    return atm.getMoney(amount)
      .then(() => downloadWithdrawal(amount))
      .then(() => dispatch(setScreenAction('home')))
      .then(() => alert.success(`you have received $${amount}`))
  };

  return (
    <Container>
      <ScreenHeader title="Get Money">
        <HomeButton loading={loading}/>
      </ScreenHeader>
      <GetMoneyForm onSubmit={onSubmit}/>
    </Container>
  );
};

export default GetMoney;
