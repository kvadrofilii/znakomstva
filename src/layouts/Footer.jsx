import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className={'container'}>
			<footer className={'footer'}>
				<Link to={'privacy'} className={'link footer__item'}>
					Политика обработки персональных данных
				</Link>
				<span className={'footer__item'}>© Znakomstva.com 2021</span>
			</footer>
		</div>
	);
}
