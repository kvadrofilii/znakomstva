import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PersonPhoto from '../components/PersonPhoto.jsx';
import Button from '../components/Button.jsx'

export default function Person() {
	const { id } = useParams();
	const { users } = useSelector((state) => state.users);
	const user = users.find(item => item.id === +id);

	return (
		<div>
			<Button
				type={'link'}
				url={`/`}
				className={'button_outline button_big'}
				text={'Назад'}
			/>
			<div className={'person__wrapper'}>
				<PersonPhoto url={user.img} />
				<div className='person__content'>
					<h2 className='person__title'>{`${user.firstName} ${user.lastName} ${user.age}`}</h2>
					<h3 className='person__about-us'>О себе</h3>
					<p>{user.aboutUs}</p>
				</div>
			</div>
		</div>
	);
}
