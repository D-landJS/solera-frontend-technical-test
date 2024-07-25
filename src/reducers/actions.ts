import { Service } from './../interfaces';
import { Action } from './types';

export const addService = (service: Service): Action => ({
	type: 'ADD_SERVICE',
	payload: service,
});

export const editService = (service: Service): Action => ({
	type: 'EDIT_SERVICE',
	payload: service,
});

export const deleteService = (id: string): Action => ({
	type: 'DELETE_SERVICE',
	payload: id,
});
export const setFilter = (filter: string): Action => ({
	type: 'SET_FILTER',
	payload: filter,
});
