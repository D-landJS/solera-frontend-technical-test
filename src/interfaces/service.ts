export interface Service {
	id: string;
	name: string;
	description: string;
	category: string;
}

export type ServicesContextType = {
	services: Service[];
	filter: string;
	addService: (service: Service) => void;
	editService: (service: Service) => void;
	deleteService: (id: string) => void;
	setFilterService: (filter: string) => void;
};

export interface ServiceEditFormProps {
	service: Service;
	onSave: (updatedService: Service) => void;
	onCancel: () => void;
}
