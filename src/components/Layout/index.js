import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

import styles from './main.module.scss';

export default function Layout() {
	return (
		<div className={styles.layout}>
			<Navbar />
			<Outlet />
		</div>
	);
}
