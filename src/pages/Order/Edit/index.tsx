import { Button, Page } from '@shopify/polaris';
import { getDetail } from 'apis/order';
import Loading from 'components/Loading';
import { useEffect, useState } from 'react';
import FormEdit from './FormEdit';
import { ChevronRightMinor } from '@shopify/polaris-icons';

const UpdateOrderPage = () => {
	const [order, setOrder] = useState<any>();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			const data = await getDetail().then((data) => setOrder(data.data));
			setLoading(false);
			return data;
		};
		fetchData().catch(console.error);
	}, []);

	useEffect(() => {
		console.log(order?.client_name);
	}, [order]);

	return (
		<Page
			title={'Update Order'}
			breadcrumbs={[{ content: 'Order', url: '/order' }]}
			fullWidth
			secondaryActions={
				<Button loading={loading} icon={ChevronRightMinor}>
					Process
				</Button>
			}
		>
			<Loading loading={loading} />
			<FormEdit order={order} />
		</Page>
	);
};

export default UpdateOrderPage;
