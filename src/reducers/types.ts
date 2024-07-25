import { Service } from './../interfaces';

export type Action =
	| { type: 'ADD_SERVICE'; payload: Service }
	| { type: 'EDIT_SERVICE'; payload: Service }
	| { type: 'DELETE_SERVICE'; payload: string }
	| { type: 'SET_FILTER'; payload: string };

export type State = {
	services: Service[];
	filter: string;
};
