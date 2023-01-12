import { Page } from '@shopify/polaris';
import { useEffect, useState } from 'react';

import { getList } from 'apis/product';
import GridView from './GridView';
import Loading from 'components/Loading';
import Popup from 'components/Popup';

const ProductPage = () => {
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

	const onSelectedDelete = (i: number) => {
		setIndex(i);
		setActive(true);
	};

	const onDelete = () => {
		const tempData = data?.map((item) => {
			return item;
		});
		index && tempData?.splice(index, 1);
		setData(tempData);
		setActive(false);
	};

	return (
		<Page fullWidth title="Products" primaryAction={{ content: 'Add new', url: '/product/create' }} compactTitle>
			<GridView data={data} onDelete={onSelectedDelete} />
			<Loading loading={loading} />
			<Popup
				title="Delete this product"
				body="This action can't undo"
				active={active}
				handleChange={() => setActive(false)}
				handleConfirm={onDelete}
			/>
		</Page>
	);
};
export default ProductPage;
