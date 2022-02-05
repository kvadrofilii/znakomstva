import { createSlice } from '@reduxjs/toolkit';
import users from '../data/users.json';

export const usersSlice = createSlice({
	name: 'users',
	initialState: {
		users: users
	},
	reducers: {},
});

export default usersSlice.reducer;
