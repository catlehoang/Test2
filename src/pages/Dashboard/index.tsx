import { Card, Page } from '@shopify/polaris';

const DashboardPage = () => {
	return (
		<Page fullWidth title="Dashboard" compactTitle>
			<Card title="Receving Order" sectioned>
				<p>Admin page information</p>
			</Card>
		</Page>
	);
};

export default DashboardPage;
