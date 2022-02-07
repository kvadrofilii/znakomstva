import { Outlet } from "react-router-dom";
import Main from '../layouts/Main.jsx';
import Header from '../layouts/Header.jsx';
import Footer from '../layouts/Footer.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';

export default function Layout() {
	return (
		<div>
			<ScrollToTop />
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</div>
	);
}
