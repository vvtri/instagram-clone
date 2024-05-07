import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../auth/slices/auth.slice';
import navbarReducer from '../slices/navbar.slice';
import userStoryReducer from '../../user-story/slices/user-story.slice';

const rootReducer = combineReducers({
	auth: authReducer,
	navbar: navbarReducer,
  userStory: userStoryReducer
});

export default rootReducer;
