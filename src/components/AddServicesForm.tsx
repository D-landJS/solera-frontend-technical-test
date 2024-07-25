import { useContext } from 'react';
import { v4 as id } from 'uuid';
import { ServicesContext } from '../context/ServicesContext';
import Form from './shared/Form';

const AddServicesForm = () => {
	const context = useContext(ServicesContext);

	if (!context) {
		throw new Error('AddServicesForm must be used within a ServicesProvider');
	}

	const { addService } = context;

	const handleSubmit = (formData: {
		name: string;
		description: string;
		category: string;
	}) => {
		const newService = {
			id: id(),
			name: formData.name,
			description: formData.description,
			category: formData.category,
		};
		addService(newService);
	};
	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">Crear Servicio</h2>
			<Form onSubmit={handleSubmit} />
		</div>
	);
};

export default AddServicesForm;
