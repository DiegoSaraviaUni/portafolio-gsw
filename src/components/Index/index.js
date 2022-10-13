import Periodos from '../Periodos';

import styles from './main.module.scss';
import bg from './images/bg.jpg';
import SobreMi from '../SobreMi';

export default function Index() {
	return (
		<div className={styles.index}>
			<div className={styles.mainBanner}>
				<div className={styles.bgContainer}>
					<img src={bg} alt="Main background" />
				</div>
				<div className={styles.content}>
					<h1 className={styles.mainTitle}>Gestion de Servidores Web</h1>
					<h2 className={styles.subtitle}>by Diego José Saravia</h2>
				</div>
			</div>
			<Periodos />
			<SobreMi />
		</div>
	);
}
