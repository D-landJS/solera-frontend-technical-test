import CardList from '../../components/CardList';
import ServicesForm from '../../components/AddServicesForm';

const HomePage = () => {
	return (
		<main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
			<CardList />
			<ServicesForm />
		</main>
	);
};

export default HomePage;
