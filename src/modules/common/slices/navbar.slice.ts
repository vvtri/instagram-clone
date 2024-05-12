import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type NavbarState = {
  showNavbarMorePopoverMenu: boolean;
  showNavbarChangeThemePopoverMenu: boolean;
};

const initialState: NavbarState = {
  showNavbarMorePopoverMenu: false,
  showNavbarChangeThemePopoverMenu: false,
};

const navbarSlice = createSlice({
  initialState,
  name: 'navbar',
  reducers: {
    hideNavbarMorePopoverMenu: (state) => {
      state.showNavbarMorePopoverMenu = false;
      state.showNavbarChangeThemePopoverMenu = false;
    },

    toggleShowNavbarMorePopoverMenu: (state) => {
      state.showNavbarMorePopoverMenu = !state.showNavbarMorePopoverMenu;
    },

    setShowNavbarChangeThemePopoverMenu: (
      state,
      {
        payload,
      }: PayloadAction<NavbarState['showNavbarChangeThemePopoverMenu']>,
    ) => {
      state.showNavbarChangeThemePopoverMenu = payload;
    },
  },
});

const { actions, reducer } = navbarSlice;

export const {
  hideNavbarMorePopoverMenu,
  toggleShowNavbarMorePopoverMenu,
  setShowNavbarChangeThemePopoverMenu,
} = actions;
export default reducer;
