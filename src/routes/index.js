import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Index from '../components/Index';
import Periodo from '../components/Periodo';
import Actividades from '../components/Actividades';
import Actividad from '../components/Actividad';

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Index />} />
				<Route path="periodo/:num_curso" element={<Periodo />}>
					<Route index element={<Actividades />} />
					<Route path=":actividad" element={<Actividad />} />
				</Route>
			</Route>
		</Routes>
	);
}
