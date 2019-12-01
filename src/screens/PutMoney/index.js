import React, {useState} from 'react';
import styled from 'styled-components';
import ScreenHeader from '../../imports/components/ScreenHeader';
import {HomeButton} from '../../imports/components/buttons';
import PutMoneyForm from './PutMoneyForm';
import atm from './../../imports/lib/atm';
import {useAlert} from 'react-alert';
import {useDispatch} from 'react-redux';
import {setScreenAction} from '../../imports/ducks/router/actions';

const Container = styled.div`
  width: 100%;
`;

const PutMoney = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onSubmit = ({amount}) => {
    setLoading(true);
    return atm.putMoney(amount)
      .then(() => dispatch(setScreenAction('home')))
      .then(() => alert.success(`you have put $${amount}`))
      .catch(e => alert.error(e));
  };

  return (
    <Container>
      <ScreenHeader title="Put Money">
        <HomeButton loading={loading}/>
      </ScreenHeader>
      <PutMoneyForm onSubmit={onSubmit}/>
    </Container>
  );
};

export default PutMoney;
