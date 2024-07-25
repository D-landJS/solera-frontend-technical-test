import React from 'react';
import { categories } from '../../utils/const';
import { Category } from '../../interfaces/category';
import useForm from '../../hooks/useForm';
import { FormProps } from '../../interfaces/form';

const Form: React.FC<FormProps> = ({
	onSubmit,
	initialData = { name: '', description: '', category: '' },
	onCancel,
}) => {
	const { formData, errors, handleChange, handleSubmit, resetForm } =
		useForm(initialData);

	const handleCancel = () => {
		if (onCancel) {
			onCancel();
		} else {
			resetForm();
		}
	};

	return (
		<form className="form" onSubmit={e => handleSubmit(e, onSubmit)}>
			<div className="m-4">
				<label
					htmlFor="name"
					className="block text-sm font-medium text-gray-700 mb-2"
				>
					Nombre
				</label>
				<input
					id="name"
					type="text"
					value={formData.name}
					onChange={handleChange}
					className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
						errors.name ? 'border-red-500' : ''
					}`}
				/>
				{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
			</div>
			<div className="m-4">
				<label
					htmlFor="description"
					className="block text-sm font-medium text-gray-700 mb-2"
				>
					Descripción
				</label>
				<textarea
					id="description"
					value={formData.description}
					onChange={handleChange}
					className={`w-full px-3 py-2 border resize-none border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
						errors.description ? 'border-red-500' : ''
					}`}
				></textarea>
				{errors.description && (
					<p className="text-red-500 text-sm">{errors.description}</p>
				)}
			</div>
			<div className="m-4">
				<label
					htmlFor="category"
					className="block text-sm font-medium text-gray-700 mb-2"
				>
					Categoría
				</label>
				<select
					id="category"
					value={formData.category}
					onChange={handleChange}
					className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
						errors.category ? 'border-red-500' : ''
					}`}
				>
					{categories.map((category: Category) => (
						<option key={category.value} value={category.value}>
							{category.label}
						</option>
					))}
				</select>
				{errors.category && (
					<p className="text-red-500 text-sm">{errors.category}</p>
				)}
			</div>
			<div className="flex gap-4 bg-gray-100 rounded-b-lg p-4">
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					Grabar
				</button>
				<button
					type="button"
					onClick={handleCancel}
					className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
				>
					Cancelar
				</button>
			</div>
		</form>
	);
};

export default Form;
