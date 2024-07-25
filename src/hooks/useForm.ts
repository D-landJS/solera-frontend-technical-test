import { useState } from 'react';
import { FormData } from '../interfaces';
import { validateField, validateForm } from '../utils/validation';

const useForm = (initialData: FormData) => {
	const [formData, setFormData] = useState<FormData>(initialData);
	const [errors, setErrors] = useState<{ [key: string]: string }>({});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { id, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[id]: value,
		}));

		const errorMessage = validateField(id as keyof FormData, value);

		if (errorMessage) {
			setErrors(prevErrors => ({ ...prevErrors, [id]: errorMessage }));
		} else {
			setErrors(prevErrors => {
				const { [id]: _, ...rest } = prevErrors;
				console.log(_);

				return rest;
			});
		}
	};

	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement>,
		onSubmit: (data: FormData) => void
	) => {
		e.preventDefault();

		const newErrors = validateForm(formData);

		if (Object.keys(newErrors).length === 0) {
			onSubmit(formData);
			setFormData(initialData);
			setErrors({});
		} else {
			setErrors(newErrors);
		}
	};

	const resetForm = () => {
		setFormData(initialData);
		setErrors({});
	};

	return {
		formData,
		errors,
		handleChange,
		handleSubmit,
		resetForm,
	};
};

export default useForm;
