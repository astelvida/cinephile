import { CHANGE_TAB } from './types';

export const changeTabPress = (selectedTab) => {
  return {
    type: CHANGE_TAB,
    selectedTab
  };
};
