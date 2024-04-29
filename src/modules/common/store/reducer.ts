import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from '../../auth/slices/auth.slice';

// example here: https://github.com/vvtri/sim-fri-client/blob/dev/src/redux/reducer.ts
const rootPersistConfig = {
	key: 'root',
	storage,
	version: 1,
	blacklist: [],
};

const rootReducer = combineReducers({
	auth: authReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
export default persistedReducer;
