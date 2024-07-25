import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/shared/Card';
import { describe, it, expect, vi } from 'vitest';

describe('Card component', () => {
	it('should call onEdit when Edit button is clicked', () => {
		const onEdit = vi.fn();
		const service = {
			id: '1',
			name: 'Test Service',
			description: 'This is a test service description.',
			category: 'Test Category',
		};

		render(<Card service={service} onEdit={onEdit} onDelete={vi.fn()} />);

		fireEvent.click(screen.getByText('Editar'));

		expect(onEdit).toHaveBeenCalled();
	});

	it('should call onDelete when Delete button is clicked', () => {
		const onDelete = vi.fn();
		const service = {
			id: '1',
			name: 'Test Service',
			description: 'This is a test service description.',
			category: 'Test Category',
		};

		render(<Card service={service} onEdit={vi.fn()} onDelete={onDelete} />);

		fireEvent.click(screen.getByText('Eliminar'));

		expect(onDelete).toHaveBeenCalled();
	});
});
