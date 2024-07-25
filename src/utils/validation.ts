import { ValidationErrors } from '../interfaces';
import { FormData } from '../interfaces';

export const validateField = (
	id: keyof FormData,
	value: string
): string | null => {
	switch (id) {
		case 'name':
			if (!value.trim()) return 'Nombre es requerido';
			if (value.length < 3) return 'El nombre debe tener al menos 3 caracteres';
			if (/\d/.test(value)) return 'El nombre no puede contener números';
			break;
		case 'description':
			if (!value.trim()) return 'Descripción es requerida';
			if (value.length < 3)
				return 'La descripción debe tener al menos 3 caracteres';
			break;
		case 'category':
			if (!value) return 'Selecciona una categoría';
			break;
		default:
			return null;
	}
	return null;
};

export const validateForm = (formData: FormData): ValidationErrors => {
	const errors: ValidationErrors = {};

	Object.keys(formData).forEach(key => {
		const errorMessage = validateField(
			key as keyof FormData,
			formData[key as keyof FormData]
		);
		if (errorMessage) {
			errors[key] = errorMessage;
		}
	});

	return errors;
};
