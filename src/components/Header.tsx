import { useContext, useEffect, useState } from 'react';
import { ServicesContext } from '../context/ServicesContext';

const Header = () => {
	const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
	const context = useContext(ServicesContext);

	if (context === undefined) {
		throw new Error('Header must be used within a ServicesProvider');
	}

	const { filter, setFilterService } = context;

	useEffect(() => {
		setSelectedFilter(filter);
	}, [filter]);

	const handleFilterChange = (filter: string) => {
		setFilterService(filter);
		setSelectedFilter(filter);
	};

	const getLinkClasses = (filter: string) => {
		return selectedFilter === filter ? 'mx-2 text-blue-500 font-bold' : 'mx-2';
	};

	return (
		<>
			<h2 className="text-5xl font-semibold mb-4 text-center">Servicios</h2>

			<header className="bg-slate-300 text-black p-4 flex items-center">
				<nav>
					<button
						className={getLinkClasses('Todos')}
						onClick={() => handleFilterChange('Todos')}
					>
						Todos
					</button>
					<button
						className={getLinkClasses('auto')}
						onClick={() => handleFilterChange('auto')}
					>
						Auto
					</button>
					<button
						className={getLinkClasses('health')}
						onClick={() => handleFilterChange('health')}
					>
						Salud
					</button>
					<button
						className={getLinkClasses('home')}
						onClick={() => handleFilterChange('home')}
					>
						Hogar
					</button>
				</nav>
			</header>
		</>
	);
};

export default Header;
