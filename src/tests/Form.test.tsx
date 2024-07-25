import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../components/shared/Form';
import { describe, it, expect, vi } from 'vitest';

describe('Form component', () => {
	it('should render form fields and handle form submission', () => {
		const handleSubmit = vi.fn();
		const handleCancel = vi.fn();

		render(<Form onSubmit={handleSubmit} onCancel={handleCancel} />);

		expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
		expect(screen.getByLabelText('Descripción')).toBeInTheDocument();
		expect(screen.getByLabelText('Categoría')).toBeInTheDocument();

		const nameInput = screen.getByLabelText('Nombre') as HTMLInputElement;
		const descriptionInput = screen.getByLabelText(
			'Descripción'
		) as HTMLTextAreaElement;
		const categorySelect = screen.getByLabelText(
			'Categoría'
		) as HTMLSelectElement;

		expect(categorySelect).toHaveTextContent('Selecciona una categoría');
		expect(categorySelect).toHaveTextContent('Auto');
		expect(categorySelect).toHaveTextContent('Salud');
		expect(categorySelect).toHaveTextContent('Hogar');

		fireEvent.change(nameInput, { target: { value: 'Test Service' } });
		fireEvent.change(descriptionInput, {
			target: { value: 'Test Description' },
		});
		fireEvent.change(categorySelect, { target: { value: 'auto' } });

		expect(nameInput.value).toBe('Test Service');
		expect(descriptionInput.value).toBe('Test Description');
		expect(categorySelect.value).toBe('auto');

		fireEvent.click(screen.getByText('Grabar'));

		expect(handleSubmit).toHaveBeenCalled();

		fireEvent.click(screen.getByText('Cancelar'));

		expect(handleCancel).toHaveBeenCalled();
	});
});
