import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UserState = {
  isShowChangeLanguageModal: boolean;
};

const initialState: UserState = {
  isShowChangeLanguageModal: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsShowChangeLanguageModal: (
      state,
      { payload }: PayloadAction<UserState['isShowChangeLanguageModal']>,
    ) => {
      state.isShowChangeLanguageModal = payload;
    },
  },
});

const { actions, reducer: userReducer } = userSlice;

export const { setIsShowChangeLanguageModal } = actions;
export default userReducer;
