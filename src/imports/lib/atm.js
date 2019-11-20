import api from '../utils/api';

const authorizationHeader = (card, pin) => window.btoa(`${card}:${pin}`);

const login = (card, pin) => {
  const headers = {Authorization: 'Basic ' + authorizationHeader(card, pin)};
  return api.get('/auth', {headers})
    .then(response => response.data)
    .catch(() => null);
};

export default {
  login,
};
