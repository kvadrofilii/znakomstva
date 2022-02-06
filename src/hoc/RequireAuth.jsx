import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RequireAuth() {
	const { isAuth } = useSelector(state => state.isAuth);

	if (!isAuth) {
		return (<Navigate to={'login'} />);
	}

	return (<Outlet />);
}
