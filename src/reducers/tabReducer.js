import { CHANGE_TAB } from '../actions/types';

export default (state = 'home', action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return action.selectedTab;
    default:
      return state;
  }
};
