import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/users';
import isAuthReducer from './reducers/isAuth';
import genderReducer from './reducers/gender';

export default configureStore({
	reducer: {
		users: usersReducer,
		isAuth: isAuthReducer,
		gender: genderReducer
	}
});
