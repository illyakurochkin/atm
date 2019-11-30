import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Header} from 'semantic-ui-react';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  padding-left: 20px;
`;

const ScreenHeader = ({title, children}) => (
  <Container>
    <Header inverted size="huge">{title}</Header>
    {children}
  </Container>
);

ScreenHeader.defaultProps = {
  children: null,
};

ScreenHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default ScreenHeader;
