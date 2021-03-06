import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DealsReducer from './DealsReducer';
import DealReducer from './DealReducer';
import ReviewReducer from './ReviewReducer';
import ProfileReducer from './ProfileReducer';
import DealFormReducer from './DealFormReducer';

export default combineReducers({
    auth: AuthReducer,
    deals: DealsReducer,
    deal: DealReducer,
    review: ReviewReducer,
    profile: ProfileReducer,
    dealForm: DealFormReducer
})