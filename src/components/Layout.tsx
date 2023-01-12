import { Frame } from '@shopify/polaris';
import { Outlet } from 'react-router-dom';

import { NavigationMarkup } from 'components/Nav';
import { TopBarMarkup } from './TopBar';

const Layout = () => {
	return (
		<Frame
			topBar={<TopBarMarkup />}
			navigation={<NavigationMarkup />}
		>
			<Outlet />
		</Frame>
	);
};

export default Layout;
