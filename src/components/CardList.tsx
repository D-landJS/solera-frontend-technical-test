import { useContext, useState } from 'react';
import { ServicesContext } from '../context/ServicesContext';
import Card from './shared/Card';
import EditServiceForm from './EditServiceForm';
import { Service } from '../interfaces';

const CardList = () => {
	const context = useContext(ServicesContext);

	if (context === undefined) {
		throw new Error('CardList must be used within a ServicesProvider');
	}

	const { services, filter, editService, deleteService } = context;
	const [editingService, setEditingService] = useState<Service | null>(null);

	const handleEditClick = (service: Service) => {
		setEditingService(service);
	};

	const handleEditSave = (updatedService: Service) => {
		editService(updatedService);
		setEditingService(null);
	};

	const handleEditCancel = () => {
		setEditingService(null);
	};

	const filteredServices =
		filter === 'Todos'
			? services
			: services.filter(service => service.category === filter);

	return (
		<div className="grid gap-4 md:grid-cols-3 col-span-2">
			{editingService ? (
				<EditServiceForm
					service={editingService}
					onSave={handleEditSave}
					onCancel={handleEditCancel}
				/>
			) : (
				<>
					{filteredServices.map(service => (
						<Card
							key={service.id}
							service={service}
							onEdit={() => handleEditClick(service)}
							onDelete={() => deleteService(service.id)}
						/>
					))}
				</>
			)}
		</div>
	);
};

export default CardList;
