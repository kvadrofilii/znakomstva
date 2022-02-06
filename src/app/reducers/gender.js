import { createSlice } from '@reduxjs/toolkit';

export const genderSlice = createSlice({
	name: 'gender',
	initialState: {
		gender: true
	},
	reducers: {
		genderTrue(state) {
			state.gender = true;
		},
		genderFalse(state) {
			state.gender = false;
		}
	}
});

export default genderSlice.reducer;
export const { genderTrue, genderFalse } = genderSlice.actions;
