import React from 'react';
import { categories } from '../../utils/const';
import { Category } from '../../interfaces/category';
import useForm from '../../hooks/useForm';
import { FormProps } from '../../interfaces/form';
import './Form.scss';

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
			<div className="form__group">
				<label htmlFor="name" className="form__label">
					Nombre
				</label>
				<input
					id="name"
					type="text"
					value={formData.name}
					onChange={handleChange}
					className={`form__input ${errors.name ? 'form__input--error' : ''}`}
				/>
				{errors.name && <p className="form__error-text">{errors.name}</p>}
			</div>
			<div className="form__group">
				<label htmlFor="description" className="form__label">
					Descripción
				</label>
				<textarea
					id="description"
					value={formData.description}
					onChange={handleChange}
					className={`form__textarea ${
						errors.description ? 'form__input--error' : ''
					}`}
				></textarea>
				{errors.description && (
					<p className="form__error-text">{errors.description}</p>
				)}
			</div>
			<div className="form__group">
				<label htmlFor="category" className="form__label">
					Categoría
				</label>
				<select
					id="category"
					value={formData.category}
					onChange={handleChange}
					className={`form__select ${
						errors.category ? 'form__input--error' : ''
					}`}
				>
					{categories.map((category: Category) => (
						<option key={category.value} value={category.value}>
							{category.label}
						</option>
					))}
				</select>
				{errors.category && (
					<p className="form__error-text">{errors.category}</p>
				)}
			</div>
			<div className="form__button-group">
				<button type="submit" className="form__button form__button--submit">
					Grabar
				</button>
				<button
					type="button"
					onClick={handleCancel}
					className="form__button form__button--cancel"
				>
					Cancelar
				</button>
			</div>
		</form>
	);
};

export default Form;
