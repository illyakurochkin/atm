const SET_SCREEN = 'atm/router/SET_SCREEN';

export const setScreenAction = screenName => ({
  type: SET_SCREEN,
  screenName,
});
