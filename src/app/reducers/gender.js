import { createSlice } from '@reduxjs/toolkit';

export const genderSlice = createSlice({
	name: 'gender',
	initialState: {
		gender: true,
		isSort: false
	},
	reducers: {
		genderTrue(state) {
			state.gender = true;
			state.isSort = true;
		},
		genderFalse(state) {
			state.gender = false;
			state.isSort = true;
		}
	}
});

export default genderSlice.reducer;
export const { genderTrue, genderFalse } = genderSlice.actions;
