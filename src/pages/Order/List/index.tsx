import { Page } from '@shopify/polaris';
import { useEffect, useState } from 'react';

import { getList } from 'apis/material';
import GridView from 'pages/Order/List/GridView';
import Loading from 'components/Loading';

const OrderPage = () => {
    const [index, setIndex] = useState<number>();
	const [data, setData] = useState<any[]>();
	const [active, setActive] = useState(false);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			const data = await getList().then((data) => setData(data));
			setLoading(false);
			return data;
		};
		fetchData().catch(console.error);
	}, []);

	return (
		<Page fullWidth title="Order List" primaryAction={{ content: 'View', url: '/order/edit' }} compactTitle>
			<GridView data={data} />
			<Loading loading={loading} />
		</Page>
	);
};

export default OrderPage;