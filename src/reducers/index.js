import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DealReducer from './DealReducer';

export default combineReducers({
    auth: AuthReducer,
    deal: DealReducer
})