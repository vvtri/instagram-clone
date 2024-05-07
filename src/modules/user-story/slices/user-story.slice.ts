import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UserStoryState = {
	isUserInteracted: boolean;
};

const initialState: UserStoryState = {
	isUserInteracted: false,
};

const userStorySlice = createSlice({
	name: 'user-story',
	initialState,
	reducers: {
		setIsUserInteracted: (
			state,
			{ payload }: PayloadAction<UserStoryState['isUserInteracted']>
		) => {
			state.isUserInteracted = payload;
		},
	},
});

const { actions, reducer: userStoryReducer } = userStorySlice;
export const { setIsUserInteracted } = actions;
export default userStoryReducer;
