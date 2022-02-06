import { Link } from 'react-router-dom';

export default function Button(props) {
	if (props.type === 'link') {
		return (
			<Link
				to={props.url}
				className={`link button ${props.className}`}
				onClick={props.onClick}
			>
				{props.text}
			</Link>
		);
	} else if (props.type === 'button') {
		return (
			<button
				className={`button ${props.className}`}
				type={props.type}
				onClick={props.onClick}
			>
				{props.text}
			</button>
		);
	} else if (props.type === 'submit') {
		return (
			<button
				className={`button ${props.className}`}
				type={props.type}
			>
				{props.text}
			</button>
		);
	}
};
