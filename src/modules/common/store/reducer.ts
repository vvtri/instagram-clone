import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../auth/slices/auth.slice';
import navbarReducer from '../slices/navbar.slice';
import userStoryReducer from '../../user-story/slices/user-story.slice';
import postReducer from '../../post/slices/post.slice';

const rootReducer = combineReducers({
	auth: authReducer,
	navbar: navbarReducer,
  userStory: userStoryReducer,
  post: postReducer
});

export default rootReducer;
