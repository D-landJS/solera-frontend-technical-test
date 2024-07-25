import React from 'react';
import { CardProps } from '../../interfaces';
import './Card.scss';

const Card: React.FC<CardProps> = ({ service, onEdit, onDelete }) => {
	return (
		<div className="card">
			<div className="card__content">
				<h2 className="card__title">{service.name}</h2>
				<p className="card__description">{service.description}</p>
			</div>
			<div className="card__actions">
				<button onClick={onEdit} className="card__button card__button--edit">
					Editar
				</button>
				<button
					onClick={onDelete}
					className="card__button card__button--delete"
				>
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default Card;
