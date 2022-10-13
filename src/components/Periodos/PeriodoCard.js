import { useNavigate } from 'react-router-dom';

import styles from './main.module.scss';

export default function PeriodoCard({ numero_curso, imagen, descripcion }) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/periodo/${numero_curso}`);
	};

	return (
		<div className={styles.periodoCard} onClick={handleClick}>
			<div className={styles.banner}>
				<img src={`images/${imagen}`} alt={descripcion} />
			</div>
			<div className={styles.title}>
				Periodo {numero_curso}: {descripcion}
			</div>
		</div>
	);
}
