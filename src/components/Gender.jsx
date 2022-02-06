import { useDispatch, useSelector } from 'react-redux';
import { genderTrue, genderFalse } from '../app/reducers/gender';

export default function Gender(props) {
	const dispatch = useDispatch();
	const { gender } = useSelector(state => state.gender);
	let isActiveMan = 'button-gender_colored',
		isActiveWoman = 'button-gender_outline';

	if (gender) {
		isActiveMan = 'button-gender_colored';
		isActiveWoman = 'button-gender_outline';
	} else {
		isActiveMan = 'button-gender_outline';
		isActiveWoman = 'button-gender_colored';
	}

	return (
		<div className={`gender-wrapper ${props.wrapper}`}>
			<button
				type={'button'}
				className={`button-gender man ${isActiveMan}`}
				onClick={() => dispatch(genderTrue())}
			>
				<span className={`button-gender__gender man`}></span>
			</button>
			<button
				type={'button'}
				className={`button-gender woman ${isActiveWoman}`}
				onClick={() => dispatch(genderFalse())}
			>
				<span className={`button-gender__gender woman`}></span>
			</button>
		</div>
	);
}
