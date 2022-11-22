import { useNavigate } from "react-router-dom";
import usePeriodos from '../../hooks/usePeriodos';

import styles from './main.module.scss';

export default function Navbar() {
	const navigate = useNavigate();
	const periodos = usePeriodos();

	const handlePeriodoClicked = (periodo) => {
		console.log('Periodo pulsado');
		navigate(`/periodo/${periodo}`);
	};

	const scrollToView = (viewId) => {
		document.querySelector(`#${viewId}`).scrollIntoView();
	};

	const handleInicioClicked = () => {
		navigate("/");
		window.scrollTo(0, 0);
	}

	const handlePeriodosClicked = async () => {
		await navigate("/");
		scrollToView('periodos');
	}

	const handleSobreMiClicked = async () => {
		await navigate("/");
		scrollToView('sobre-mi');
	}

	return (
		<header className={styles.navbar}>
			<div className={styles.logo}>GSW</div>
			<nav className={styles.nav}>
				<div onClick={handleInicioClicked}>Inicio</div>
				<div className={styles.periodos}>
					<span onClick={handlePeriodosClicked}>Periodos</span>
					<div className={styles.lista}>
						{periodos.map((periodo, i) => (
							<div key={i} onClick={() => handlePeriodoClicked(periodo.numero_curso)}>{`Periodo ${periodo.numero_curso}`}</div>
						))}
					</div>
				</div>
				<div onClick={handleSobreMiClicked}>Sobre mi</div>
			</nav>
		</header>
	);
}
