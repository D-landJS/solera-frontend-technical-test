import { Navigate, RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '*',
		element: <Navigate to="/" />,
	},
];

export default routes;
