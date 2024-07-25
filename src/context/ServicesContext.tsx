import { createContext, useReducer, ReactNode, useEffect } from 'react';
import { Service, ServicesContextType } from '../interfaces';
import servicesReducer from '../reducers/servicesReducer';
import {
	addService,
	deleteService,
	editService,
	setFilter,
} from '../reducers/actions';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { State } from '../reducers/types';

export const ServicesContext = createContext<ServicesContextType | undefined>(
	undefined
);

const ServicesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const { getValue, setValue } = useLocalStorage<State>('services', {
		services: [],
		filter: '',
	});

	const [state, dispatch] = useReducer(servicesReducer, getValue());

	const addServiceHandler = (service: Service) => {
		dispatch(addService(service));
	};

	const editServiceHandler = (service: Service) => {
		dispatch(editService(service));
	};

	const setFilterHandler = (filter: string) => {
		dispatch(setFilter(filter));
	};

	const deleteServiceHandler = (id: string) => {
		dispatch(deleteService(id));
	};

	useEffect(() => {
		setValue(state);
	}, [state, setValue]);

	return (
		<ServicesContext.Provider
			value={{
				services: state.services,
				filter: state.filter,
				addService: addServiceHandler,
				editService: editServiceHandler,
				deleteService: deleteServiceHandler,
				setFilterService: setFilterHandler,
			}}
		>
			{children}
		</ServicesContext.Provider>
	);
};

export { ServicesProvider };
