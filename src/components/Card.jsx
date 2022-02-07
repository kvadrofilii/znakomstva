import Button from './Button.jsx';

export default function Card(props) {
	const { firstName, lastName, age, img, id } = props;
	const style = { backgroundImage: `url(${img})` };

	return (
		<div className={'card'} style={style}>
			<div className={'card__text'} >
				<span>{firstName}</span>
				<span>{lastName}</span>
				<span>{age}</span>
			</div>
			<Button
				type={'link'}
				url={`${id}`}
				className={'button_small button_colored'}
				text={'Подробнее'}
			/>
		</div>
	);
}
