import React from 'react';
import PropTypes from 'prop-types';
import {positions, Provider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const AlertProvider = ({children}) => (
  <Provider template={AlertTemplate} timeout={5000} position={positions.TOP_RIGHT}>
    {children}
  </Provider>
);

AlertProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AlertProvider;
