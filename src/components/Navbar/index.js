import usePeriodos from '../../hooks/usePeriodos';

import styles from './main.module.scss';

export default function Navbar() {
	const periodos = usePeriodos();

	const handlePeriodoClicked = () => {
		console.log('Periodo pulsado');
	};

	const scrollToView = (viewId) => {
		document.querySelector(`#${viewId}`).scrollIntoView();
	};

	return (
		<header className={styles.navbar}>
			<div className={styles.logo}>GSW</div>
			<nav className={styles.nav}>
				<div onClick={() => window.scrollTo(0, 0)}>Inicio</div>
				<div className={styles.periodos}>
					<span onClick={() => scrollToView('periodos')}>Periodos</span>
					<div className={styles.lista}>
						{periodos.map((periodo, i) => (
							<div key={i} onClick={handlePeriodoClicked}>{`Periodo ${periodo.numero_curso}`}</div>
						))}
					</div>
				</div>
				<div onClick={() => scrollToView('sobre-mi')}>Sobre mi</div>
			</nav>
		</header>
	);
}
