import React from 'react';
import { FormData } from '../interfaces';
import Form from './shared/Form';
import { ServiceEditFormProps } from '../interfaces';

const EditServiceForm: React.FC<ServiceEditFormProps> = ({
	service,
	onSave,
	onCancel,
}) => {
	const handleSubmit = (formData: FormData) => {
		onSave({ ...service, ...formData });
	};

	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">Editar Servicio</h2>
			<Form
				onSubmit={handleSubmit}
				initialData={{
					name: service.name,
					description: service.description,
					category: service.category,
				}}
				onCancel={onCancel}
			/>
		</div>
	);
};

export default EditServiceForm;
