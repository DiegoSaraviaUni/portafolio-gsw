import { useNavigate } from 'react-router-dom';
import slugify from '../../helpers/slugify';

import style from './main.module.scss';

export default function Actividad({ imagen, titulo }) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`${slugify(titulo)}`);
	};

	return (
		<div className={style.actividad} onClick={handleClick}>
			<div className={style.imgContainer}>
				<img src={`images/${imagen}`} alt={titulo} />
			</div>
			<div className={style.layer}>{titulo}</div>
		</div>
	);
}
