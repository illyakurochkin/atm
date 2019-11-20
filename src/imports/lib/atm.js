import api from '../utils/api';

const login = (card, pin) => api.post('/auth', {card, pin})
  .then(response => response.data)
  .catch(() => null);

export default {
  login,
};
