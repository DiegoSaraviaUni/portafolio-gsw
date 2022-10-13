import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import styles from './main.module.scss';
import periodos from '../../db/periodos.json';
import actividadesJSON from '../../db/actividades.json';

export default function Periodo() {
	const [actividades, setActividades] = useState([]);
	const [periodo, setPeriodo] = useState({});
	const { num_curso } = useParams();

	useEffect(() => {
		const periodo = periodos.find((periodo) => {
			return periodo.numero_curso === num_curso;
		});
		setPeriodo(periodo);

		const { id_categoria } = periodo;
		const actividadesFiltradas = actividadesJSON.filter((actividad) => actividad.id_periodo === id_categoria);
		setActividades(actividadesFiltradas);
	}, [num_curso, setActividades, setPeriodo]);

	return (
		<div className={styles.periodo}>
			<div className={styles.banner}>
				<div className={styles.bannerImg}>
					<img src={`images/${periodo.imagen}`} alt="Banner" />
				</div>
				<div className={styles.layer}>{`Periodo ${periodo.numero_curso}`}</div>
			</div>
			<Outlet context={{ actividades }} />
		</div>
	);
}
