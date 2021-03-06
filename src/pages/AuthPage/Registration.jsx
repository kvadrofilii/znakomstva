import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input.jsx';
import Gender from '../../components/Gender.jsx';
import Button from '../../components/Button.jsx';
import { logIn, userId } from '../../app/reducers/isAuth';

export default function Registration() {
	const dispatch = useDispatch();
	const { gender } = useSelector(state => state.gender);
	const { isAuth } = useSelector(state => state.isAuth);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState('');
	const [about, setAbout] = useState('');
	const [inputErrors, setInputErrors] = useState({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		age: ''
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
		} else if ((nameInput === 'age') && (!validateAge(age))) {
			copyInputErrors.age = 'input_error-valid';
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
		inputValid(firstName, 'firstName');
		inputValid(lastName, 'lastName');
		inputValid(age, 'age');

		if (firstName && lastName && validateAge(age) && email &&
			validateEmail(email) && password && (password.length > 5)) {
			dispatch(logIn());
			dispatch(userId(0));
			localStorage.setItem('email', email);
			localStorage.setItem('password', password);
			localStorage.setItem('firstName', firstName);
			localStorage.setItem('gender', gender);
			localStorage.setItem('lastName', lastName);
			localStorage.setItem('about', about);
			localStorage.setItem('age', +age);
		}
	}

	if (isAuth) {
		return <Navigate to={'/'} />
	}

	return (
		<div>
			<h1 className={'registration__title'}>???????????? ?????????? ??????????????</h1>
			<p className={'registration__description'}>?????????????????????????? ?? ???????????????????? ???? 518 ?????? ??????????????!</p>
			<form className={'registration__form'} onSubmit={handleSubmit} noValidate>
				<Input
					onChange={(event) => setFirstName(event.target.value)}
					isError={inputErrors.firstName}
					textError={''}
					value={firstName}
					type={'text'}
					placeholder={'???????? ?????? *'}
					icoBefore={'user'}
					icoAfter={''}
					wrapper={'registration__input-wrapper'}
				/>

				<Input
					onChange={(event) => setLastName(event.target.value)}
					isError={inputErrors.lastName}
					textError={''}
					value={lastName}
					type={'text'}
					placeholder={'???????? ?????????????? *'}
					icoBefore={'user'}
					icoAfter={''}
					wrapper={'registration__input-wrapper'}
				/>

				<Input
					onChange={(event) => setAge(event.target.value)}
					isError={inputErrors.age}
					textError={'?????????? ???????????? ???????????????? ??????????????'}
					value={age}
					type={'text'}
					placeholder={'?????? ?????????????? *'}
					icoBefore={'user'}
					icoAfter={''}
					wrapper={'registration__input-wrapper'}
				/>

				<Gender wrapper={'registration__input-wrapper'} />

				<Input
					onChange={(event) => setAbout(event.target.value)}
					isError={''}
					textError={''}
					value={about}
					type={'textarea'}
					placeholder={'???????????????? ?? ????????'}
					icoBefore={''}
					icoAfter={''}
					wrapper={'registration__input-wrapper'}
				/>

				<Input
					onChange={(event) => setEmail(event.target.value)}
					isError={inputErrors.email}
					textError={'Email ????????????????????'}
					value={email}
					type={'email'}
					placeholder={'?????????????? e-mail *'}
					icoBefore={'email'}
					icoAfter={''}
					wrapper={'registration__input-wrapper'}
				/>

				<Input
					onChange={(event) => setPassword(event.target.value)}
					isError={inputErrors.password}
					textError={'???????????? ???????????? ?????????????????? ?????? ?????????????? 6 ????????????????'}
					value={password}
					type={'password'}
					placeholder={'?????????????? ???????????? *'}
					icoBefore={'password'}
					icoAfter={''}
					wrapper={'registration__input-wrapper'}
				/>

				<Button
					type={'submit'}
					className={'button button_big button_colored registration__button'}
					text={'?????????????? ??????????????'}
				/>
			</form>
		</div >
	);
}

function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function validateAge(age) {
	if ((!isNaN(age)) && (+age < 100)) {
		return true;
	}
	return false;
}
