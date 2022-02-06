import React from 'react';
import Logo from '../components/Logo.jsx';
import Button from '../components/Button.jsx';
import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../app/reducers/isAuth';

export default function Header() {
	const dispatch = useDispatch();
	const location = useLocation();
	const { isAuth, userId } = useSelector(state => state.isAuth);
	const { users } = useSelector(state => state.users);
	const firstName = localStorage.getItem('firstName');
	const lastName = localStorage.getItem('lastName');

	function logOutButton() {
		dispatch(logOut());
		<Navigate to={'login'} />
	}

	if (isAuth) {
		const user = users.find(item => item.id === userId);
		return (
			<header className={'header'}>
				<div className={'container'}>
					<div className={'header__main-wrapper'}>
						<Logo auth={true} />
						<div className={'header__main-wrapper'}>
							<div className={'header__user'}>
								{
									(userId === 0)
										?
										<span className={'header__name'}>
											{firstName} {lastName}
										</span>
										:
										<span className={'header__name'}>
											{user.firstName} {user.lastName}
										</span>
								}
								<Button
									onClick={logOutButton}
									className={'button_outline'}
									type={'button'}
									text={'Выход'}
								/>
							</div>
						</div>
					</div>
				</div >
			</header>
		);
	}

	return (
		<header className={'header'}>
			<div className={'container'}>
				<div className={'header__wrapper'}>
					<Logo auth={false} />
					{
						location.pathname.includes('registration')
							?
							<div className={'header__enter-wrapper'}>
								<div className={'header__title'}>Уже есть аккаунт?</div>
								<Button
									type={'link'}
									url={'login'}
									className={'button_outline'}
									text={'Войти'}
								/>
							</div>
							:
							<div className={'header__enter-wrapper'}>
								<div className={'header__title'}>Впервые здесь?</div>
								<Button
									type={'link'}
									url={'registration'}
									className={'button_outline'}
									text={'Регистрация'}
								/>
							</div>
					}
				</div>
			</div>
		</header>
	);
}
