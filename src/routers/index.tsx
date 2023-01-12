import { Login } from 'pages/Auth/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UnAuthLayout } from 'components/AuthLayout';
import Layout from 'components/Layout';
import DashboardPage from 'pages/Dashboard';
import ProductPage from 'pages/Product/List';
import CreateProductPage from 'pages/Product/Create';
import MaterialPage from 'pages/Material/List';
import UpdateOrderPage from 'pages/Order/Edit';

export const Routers = () => {
	const router = createBrowserRouter([
		{
			path: '',
			element: <Layout />,
			children: [
				{
					path: 'dashboard',
					element: <DashboardPage />,
				},
				{
					path: 'product',
					element: <ProductPage />,
				},
				{
					path: 'product/create',
					element: <CreateProductPage />,
				},
				{
					path: 'material',
					element: <MaterialPage />,
				},
				{
					path: 'order/update',
					element: <UpdateOrderPage />,
				},
			],
		},
		{
			path: 'auth',
			element: <UnAuthLayout />,
			children: [
				{
					path: 'login',
					element: <Login />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};
