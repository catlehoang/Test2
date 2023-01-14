import { TopBar } from '@shopify/polaris';
import { ArrowLeftMinor } from '@shopify/polaris-icons';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const TopBarMarkup = () => {
	const navigate = useNavigate();
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const toggleIsUserMenuOpen = useCallback(() => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen), []);

	const userMenu = (
		<TopBar.UserMenu
			actions={[
				{
					items: [
						{
							content: 'Logout',
							icon: ArrowLeftMinor,
							onAction: () => {
								navigate('/auth/login');
							},
						},
					],
				},
			]}
			name="Cat"
			detail={`Cat Le Hoang`}
			initials="C"
			open={isUserMenuOpen}
			onToggle={toggleIsUserMenuOpen}
		/>
	);

	return <TopBar userMenu={userMenu} />;
};
