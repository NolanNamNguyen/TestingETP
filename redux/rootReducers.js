import { combineReducers } from 'redux';
import commonReducer from '@reduxSlices/commonSlice';
import topPageReducer from '@reduxSlices/topPageSlice';

export default combineReducers({
  commonReducer,
  topPageReducer,
});
