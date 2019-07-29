import { THEME_KEY, LAYOUT_KEY } from './storageDefinitions';
import loadState from './loadState';

const loadInitialState = () => {
  const initialState = {};
  const theme = loadState({ storageKey: THEME_KEY });

  if (theme) {
    initialState.app = {};
    initialState.app.theme = theme;
  }

  return initialState;
};

export default loadInitialState;
