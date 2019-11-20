import Auth from './../../screens/Auth';
import Home from './../../screens/Home';

const SET_SCREEN = 'atm/router/SET_SCREEN';

export const setScreenAction = screenName => ({
  type: SET_SCREEN,
  screenName,
});

export const screens = {
  auth: Auth,
  home: Home,
};

const INITIAL_STATE = 'auth';

export const selectScreen = state => screens[state.ducks.router];

export default (state = INITIAL_STATE, {type, screenName}) => {
  switch(type) {
    case SET_SCREEN:
      return screenName;
    default:
      return state;
  }
}
