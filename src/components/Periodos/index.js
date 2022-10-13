import PeriodoCard from './PeriodoCard';

import styles from './main.module.scss';
import periodos from '../../db/periodos.json';

export default function Periodos() {
	return (
		<div id="periodos" className={styles.periodos}>
			<h2 className={styles.mainTitle}>Periodos</h2>
			<div className={styles.periodosCard}>
				{periodos.map((periodo, i) => (
					<PeriodoCard key={i} {...periodo} />
				))}
			</div>
		</div>
	);
}
