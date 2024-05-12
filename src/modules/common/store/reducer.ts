import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../auth/slices/auth.slice';
import postReducer from '../../post/slices/post.slice';
import userStoryReducer from '../../user-story/slices/user-story.slice';
import userSlice from '../../user/slices/user.slice';
import navbarReducer from '../slices/navbar.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  navbar: navbarReducer,
  userStory: userStoryReducer,
  post: postReducer,
  user: userSlice,
});

export default rootReducer;
