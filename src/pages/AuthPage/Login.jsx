import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import { logIn, userId } from '../../app/reducers/isAuth';

export default function Login() {
	const dispatch = useDispatch();
	const { isAuth } = useSelector(state => state.isAuth);
	const { users } = useSelector(state => state.users);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [inputErrors, setInputErrors] = useState({
		textError: '',
		email: '',
		password: ''
	});
	let copyInputErrors = Object.assign({}, inputErrors);

	function inputValid(input, nameInput) {
		if (!input) {
			copyInputErrors[nameInput] = 'input_error-not';
			setInputErrors(copyInputErrors);
			return;
		} else if ((nameInput === 'email') && (!validateEmail(email))) {
			copyInputErrors.email = 'input_error-valid';
			setInputErrors(copyInputErrors);
			return;
		} else if ((nameInput === 'password') && (password.length < 6)) {
			copyInputErrors.password = 'input_error-valid';
			setInputErrors(copyInputErrors);
			return;
		} else {
			copyInputErrors[nameInput] = '';
			setInputErrors(copyInputErrors);
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		inputValid(email, 'email');
		inputValid(password, 'password');

		if (email && validateEmail(email) && password && (password.length > 5)) {
			const user = users.find(item => item.email === email);
			if ((user) && (user.password === password)) {
				dispatch(logIn());
				dispatch(userId(user.id));
			} else {
				copyInputErrors.textError = 'login__error';
				setInputErrors(copyInputErrors);
			}
		}
	}

	if (isAuth) {
		return <Navigate to={'/'} />
	}

	return (
		<div>
			<h1 className={'login__title'}>Знакомства без преград</h1>
			<p className={'login__description'}>Для современного мира сплочённость команды профессионалов однозначно фиксирует необходимость системы обучения кадров, соответствующей насущным потребностям.</p>
			<form className={'login__form'} onSubmit={handleSubmit} noValidate>
				<div className={`login__error-text ${inputErrors.textError}`}>E-mail или пароль не правильные</div>
				<Input
					onChange={(event) => setEmail(event.target.value)}
					isError={inputErrors.email}
					textError={'Email невалидный'}
					value={email}
					type={'email'}
					placeholder={'Введите электронную почту *'}
					icoBefore={'email'}
					icoAfter={''}
					wrapper={'login__input-wrapper'}
				/>
				<Input
					onChange={(event) => setPassword(event.target.value)}
					isError={inputErrors.password}
					textError={'Пароль должен содержать как минимум 6 символов'}
					value={password}
					type={'password'}
					placeholder={'Введите пароль *'}
					icoBefore={'password'}
					icoAfter={''}
					wrapper={'login__input-wrapper'}
				/>
				<Button
					type={'submit'}
					className={'button button_big button_colored login__button'}
					text={'Войти'}
				/>
			</form>
		</div>
	);
}

function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
