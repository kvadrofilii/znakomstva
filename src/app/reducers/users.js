import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
		user: null
	},
	reducers: {
		getUsers(state, { payload }) {
			state.users = payload;
		}
	}
});

export default usersSlice.reducer;
export const { getUsers } = usersSlice.actions;
