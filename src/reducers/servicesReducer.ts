import { State, Action } from './types';

const initialState: State = {
	services: [],
	filter: 'Todos',
};

const servicesReducer = (
	state: State = initialState,
	action: Action
): State => {
	switch (action.type) {
		case 'ADD_SERVICE':
			return { ...state, services: [...state.services, action.payload] };
		case 'EDIT_SERVICE':
			return {
				...state,
				services: state.services.map(service =>
					service.id === action.payload.id ? action.payload : service
				),
			};
		case 'DELETE_SERVICE':
			return {
				...state,
				services: state.services.filter(
					service => service.id !== action.payload
				),
			};
		case 'SET_FILTER':
			return { ...state, filter: action.payload };
		default:
			return state;
	}
};

export default servicesReducer;
