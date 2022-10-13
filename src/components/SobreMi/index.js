import styles from './main.module.scss';
import me from './images/me.jpg';

export default function SobreMi() {
	function getEdad(dateString) {
		let hoy = new Date();
		let fechaNacimiento = new Date(dateString);
		let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
		let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
		return diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
			? --edad
			: edad;
	}

	return (
		<div id="sobre-mi" className={styles.sobreMi}>
			<h2 className={styles.mainTitle}>Sobre mi</h2>
			<div className={styles.info}>
				<div className={styles.me}>
					<img src={me} alt="me" />
				</div>
				<div className={styles.content}>
					Mi nombre es <span className={styles.name}>Diego José Saravia Zaldaña</span>.
					<br />
					Actualmente soy estudiante de Ingeniería en Desarrollo de Software en la Universidad Católica de El
					Salvador. Nací el 11 de noviembre del año 2000, por lo que actualmente tengo {getEdad(
						'11/11/2000'
					)}{' '}
					años de edad. <br />
					Soy originario del departamente de Santa Ana, El Salvador. <br />
					Soy un entusiasta de la programación, por lo que paso mucho tiempo buscando y aprendiendo sobre
					nuevas tecnologías de este mundo.
				</div>
			</div>
		</div>
	);
}
