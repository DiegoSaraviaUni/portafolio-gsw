import { useOutletContext } from 'react-router-dom';
import Actividad from './Actividad';

import styles from './main.module.scss';

export default function Actividades() {
	const { actividades } = useOutletContext();

	return (
		<div className={styles.actividades}>
			{actividades.map((actividad, i) => (
				<Actividad key={i} {...actividad} />
			))}
		</div>
	);
}
