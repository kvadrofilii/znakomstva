import { Outlet } from "react-router-dom";
import Main from '../layouts/Main.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Layout() {
	return (
		<div>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</div>
	);
}
