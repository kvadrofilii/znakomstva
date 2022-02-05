import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './reducers/users';

export default configureStore({
	reducer: {
		users: usersReducer,
	}
});
