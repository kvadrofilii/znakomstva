import { Outlet } from 'react-router-dom';

export default function Main() {
	return (
		<main className={'main'}>
			<div className={'container'}>
				<Outlet />
			</div>
		</main>
	);
}
