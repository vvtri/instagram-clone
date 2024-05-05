import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../auth/slices/auth.slice';
import navbarReducer from '../slices/navbar.slice';

const rootReducer = combineReducers({
	auth: authReducer,
	navbar: navbarReducer,
});

export default rootReducer;
