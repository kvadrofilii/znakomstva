import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card.jsx';
import Gender from '../components/Gender.jsx';
import Button from '../components/Button.jsx';

export default function Persons() {
	const { gender, isSort } = useSelector(state => state.gender);
	const { users } = useSelector(state => state.users);
	const [sortUsers, setSortUsers] = useState(users);
	let copySortUsers = Object.assign([], sortUsers);
	const [sort, setSort] = useState({
		isAge: true,
		isFirstName: true,
		isLastName: true
	});
	let copySort = Object.assign({}, sort);

	if (!gender && isSort) {
		copySortUsers = copySortUsers.filter((item) => item.gender === 'woman');
	} else if (gender && isSort) {
		copySortUsers = copySortUsers.filter((item) => item.gender === 'man');
	}

	function sortAge() {
		copySort.isAge = !copySort.isAge;
		setSort(copySort);
		sort.isAge
			?
			copySortUsers = copySortUsers.sort((x, y) => x["age"] - y["age"])
			:
			copySortUsers = copySortUsers.sort((x, y) => y["age"] - x["age"]);
		setSortUsers(copySortUsers);
	}

	function sortFirstName() {
		copySort.isFirstName = !copySort.isFirstName;
		setSort(copySort);
		sort.isFirstName
			?
			copySortUsers = copySortUsers.sort((a, b) => a.firstName.localeCompare(b.firstName))
			:
			copySortUsers = copySortUsers.sort((a, b) => b.firstName.localeCompare(a.firstName));
		setSortUsers(copySortUsers);
	}

	function sortLastName() {
		copySort.isLastName = !copySort.isLastName;
		setSort(copySort);
		sort.isLastName
			?
			copySortUsers = copySortUsers.sort((a, b) => a.lastName.localeCompare(b.lastName))
			:
			copySortUsers = copySortUsers.sort((a, b) => b.lastName.localeCompare(a.lastName));
		setSortUsers(copySortUsers);
	}

	return (
		<div>
			<Gender wrapper={'persons__input-wrapper'} />

			<div className={'sort-wrapper'}>
				<Button
					onClick={sortAge}
					className='button_small persons__button'
					type={'button'}
					text={'Возраст'}
				/>
				<Button
					onClick={sortFirstName}
					className='button_small persons__button'
					type={'button'}
					text={'Имя'}
				/>
				<Button
					onClick={sortLastName}
					className='button_small persons__button'
					type={'button'}
					text={'Фамилия'}
				/>
			</div>
			<div className={'persons__cards'}>
				{copySortUsers.map(item =>
					<Card	{...item} key={item.id} />
				)}
			</div>
		</div >
	);
}
