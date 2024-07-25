import { Service } from './service';

export interface CardProps {
	service: Service;
	onEdit: () => void;
	onDelete: () => void;
}
