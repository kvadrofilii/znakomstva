import { createSlice } from '@reduxjs/toolkit';

export const isAuthSlice = createSlice({
	name: 'isAuth',
	initialState: {
		userId: null,
		isAuth: false,
	},
	reducers: {
		userId(state, { payload }) {
			state.userId = payload;
		},
		logIn(state) {
			state.isAuth = true;
		},
		logOut(state) {
			state.isAuth = false;
		}
	}
});

export default isAuthSlice.reducer;
export const { userId, logIn, logOut } = isAuthSlice.actions;
