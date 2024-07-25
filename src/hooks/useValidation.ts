import { useState } from 'react';
import { ValidationErrors } from '../interfaces/validation';
import { FormData } from '../interfaces';

const useValidation = (formData: FormData) => {
	const [errors, setErrors] = useState<ValidationErrors>({});

	const validateField = (id: string, value: string) => {
		const newErrors: ValidationErrors = { ...errors };

		if (id === 'name') {
			if (!value.trim()) {
				newErrors.name = 'Nombre es requerido';
			} else if (value.length < 3) {
				newErrors.name = 'El nombre debe tener al menos 3 caracteres';
			} else if (/\d/.test(value)) {
				newErrors.name = 'El nombre no puede contener números';
			} else {
				delete newErrors.name;
			}
		}

		if (id === 'description') {
			if (!value.trim()) {
				newErrors.description = 'Descripción es requerida';
			} else if (value.length < 3) {
				newErrors.description =
					'La descripción debe tener al menos 3 caracteres';
			} else {
				delete newErrors.description;
			}
		}

		if (id === 'category') {
			if (value === 'auto') {
				newErrors.category = 'Selecciona una categoría';
			} else {
				delete newErrors.category;
			}
		}

		setErrors(newErrors);
	};

	const validateForm = () => {
		const newErrors: ValidationErrors = {};
		Object.keys(formData).forEach(key => {
			validateField(key, formData[key as keyof FormData]);
		});
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	return {
		errors,
		validateField,
		validateForm,
	};
};

export default useValidation;
