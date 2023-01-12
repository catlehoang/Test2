import { useLocation } from 'react-router-dom';
import { Navigation } from '@shopify/polaris';
import { HomeMinor, ArchiveMinor, CartMajor, InventoryMajor } from '@shopify/polaris-icons';

const items = [
	{
		url: '/dashboard',
		label: 'Home',
		icon: HomeMinor,
	},
	{
		url: '/product',
		label: 'Product',
		icon: ArchiveMinor,
	},

	{
		url: '/order',
		label: 'Order',
		icon: CartMajor,
	},

	{
		url: '/material',
		label: 'Material',
		icon: InventoryMajor,
	}
];

export const NavigationMarkup = () => {
	const location = useLocation();
	return (
		<Navigation location={location.pathname}>
			<Navigation.Section items={items} />
		</Navigation>
	);
};
