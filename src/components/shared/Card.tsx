import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ service, onEdit, onDelete }) => {
	return (
		<div className="border rounded-lg shadow-md bg-white flex flex-col h-48 mt-4">
			<div className="flex-1 flex flex-col p-4">
				<h2 className="text-xl font-semibold mb-2">{service.name}</h2>
				<p className="text-gray-700 mb-4 flex-1">{service.description}</p>
			</div>
			<div className="flex gap-4 bg-gray-100 rounded-b-lg p-4">
				<button
					onClick={onEdit}
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					Editar
				</button>
				<button
					onClick={onDelete}
					className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
				>
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default Card;
