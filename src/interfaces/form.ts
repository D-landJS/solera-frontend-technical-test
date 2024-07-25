export interface FormData {
	name: string;
	description: string;
	category: string;
}

export interface FormProps {
	onSubmit: (formData: FormData) => void;
	onCancel?: () => void;
	initialData?: FormData;
}
