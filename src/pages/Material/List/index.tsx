import { Page } from '@shopify/polaris';
import { useEffect, useState } from 'react';

import { getList } from 'apis/material';
import GridView from './GridView';
import Loading from 'components/Loading';

const MaterialPage = () => {
	const [data, setData] = useState<any[]>();
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
		<Page fullWidth title="Materials" compactTitle>
			<GridView data={data} />
			<Loading loading={loading} />
		</Page>
	);
};
export default MaterialPage;
