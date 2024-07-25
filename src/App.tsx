import './App.scss';
import CardList from './components/CardList';
import Header from './components/Header';
import ServicesForm from './components/AddServicesForm';
import { ServicesProvider } from './context/ServicesContext';

export default function App() {
	return (
		<>
			<h2 className="text-5xl font-semibold mb-4 text-center">Servicios</h2>
			<ServicesProvider>
				<Header />

				<main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
					<CardList />
					<ServicesForm />
				</main>
			</ServicesProvider>
		</>
	);
}
