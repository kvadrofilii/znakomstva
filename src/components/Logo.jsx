import { Link } from "react-router-dom";

export default function Logo({ auth }) {
	return (
		auth
			?
			<Link to={'persons'} className={'link'}>
				<div className={'logo__wrapper'}>
					<div className={'logo__ico'}></div>
					<span className={'logo__text logo__text_private'}>
						Znakomstva.com
					</span>
				</div>
			</Link>
			:
			<div className={'logo__wrapper'}>
				<div className={'logo__ico'}></div>
				<span className={'logo__text'}>
					Znakomstva.com
				</span>
			</div>
	);
}
