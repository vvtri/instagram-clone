import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type PostState = {
	modal: {
		isShow: boolean;
		postId?: number;
	};
};

const initialState: PostState = {
	modal: {
		isShow: false,
	},
};

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		setShowPostModal: (
			state,
			{ payload }: PayloadAction<PostState['modal']>
		) => {
			state.modal = payload;
		},
	},
});

const { actions, reducer } = postSlice;

export const { setShowPostModal } = actions;
export default reducer;
