import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DealsReducer from './DealsReducer';
import DealReducer from './DealReducer';

export default combineReducers({
    auth: AuthReducer,
    deals: DealsReducer,
    deal: DealReducer
})