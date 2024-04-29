import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AuthState = {
	num: number;
};

const initialState: AuthState = {
	num: 1,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		increaseNum: (state, { payload }: PayloadAction<AuthState>) => {
			state.num += payload.num;
		},
	},
});

const { actions, reducer } = authSlice;
export const { increaseNum } = actions;
export default reducer;
