import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import slugify from '../../helpers/slugify';

import styles from './main.module.scss';

export default function Actividad() {
	const { actividades } = useOutletContext();
	const { actividad: actividadSlug } = useParams();
	const [actividad, setActividad] = useState();

	useEffect(() => {
		const actividadesFiltered = actividades.find((actividad) => slugify(actividad.titulo) === actividadSlug);
		setActividad(actividadesFiltered);
	}, [actividades, setActividad, actividadSlug]);

	if (!actividad) return <></>;
	return (
		<div className={styles.actividad}>
			<h1 className={styles.mainTitle}>{actividad.titulo}</h1>
			<div className={styles.mainImg}>
				<img src={`images/${actividad.imagen}`} alt={actividad.titulo} />
			</div>
			<p className={styles.objetivo}>
				<span className={styles.objetivoStr}>Objetivo:</span> {actividad.objetivo}
			</p>
			<div className={styles.link}>
				<a href={actividad.enlace} target="_blank" rel="noopener noreferrer" className={styles.linkDrive}>
					Ver carpeta/documento con procedimiento
				</a>
			</div>
		</div>
	);
}
