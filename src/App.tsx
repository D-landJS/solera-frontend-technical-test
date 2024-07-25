import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import { ServicesProvider } from './context/ServicesContext';
import routes from './routes';

function AppRoutes() {
	return useRoutes(routes);
}

export default function App() {
	return (
		<>
			<BrowserRouter>
				<ServicesProvider>
					<Header />
					<AppRoutes />
				</ServicesProvider>
			</BrowserRouter>
		</>
	);
}
