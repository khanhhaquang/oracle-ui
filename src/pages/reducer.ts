import { combineReducers } from 'redux';
import home from 'pages/Home/store/reducer';

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
