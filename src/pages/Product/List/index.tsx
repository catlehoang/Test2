import { Button, ButtonGroup, Page } from '@shopify/polaris';
import { useEffect, useState } from 'react';

import { getList } from 'apis/product';
import GridView from './GridView';

const ProductPage = () => {
	const [data, setData] = useState<any[]>();
	useEffect(() => {
		const fetchData = async () => {
			const data = await getList().then((data) => setData(data));
			return data;
		};
		fetchData().catch(console.error);
	}, []);

	return (
		<Page fullWidth title="Products" primaryAction={{ content: 'Add new', url: '/product/create' }} compactTitle>
			<GridView data={data} />
		</Page>
	);
};
export default ProductPage;
