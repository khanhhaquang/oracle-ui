import { combineReducers } from 'redux';
import home from 'pages/Home/redux/reducer';

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
