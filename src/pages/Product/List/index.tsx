import { Button, Filters, Page } from '@shopify/polaris';
import { useCallback, useEffect, useState } from 'react';

import { getList } from 'apis/product';
import GridView from './GridView';
import Loading from 'components/Loading';
import Popup from 'components/Popup';

const ProductPage = () => {
	const [index, setIndex] = useState<number>();
	const [data, setData] = useState<any[]>();
	const [active, setActive] = useState(false);
	const [loading, setLoading] = useState(true);
	const [queryValue, setQueryValue] = useState('');

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

	const handleFiltersQueryChange = useCallback((value: string) => {
		setQueryValue(value);
	}, []);

	const handleOnSearch = () => {
		let newArr = data && [...data];
		newArr = newArr && newArr.filter((x) => x.name === queryValue);
		setData(newArr);
	};

	return (
		<Page fullWidth title="Products" primaryAction={{ content: 'Add new', url: '/product/create' }} compactTitle>
			<div className="mb-5">
				<Filters
					queryPlaceholder="Search by name"
					queryValue={queryValue}
					filters={[]}
					onQueryClear={() => setQueryValue('')}
					onClearAll={() => setQueryValue('')}
					onQueryChange={handleFiltersQueryChange}
				>
					<div className="ml-5">
						<Button onClick={handleOnSearch}>Search</Button>
					</div>
				</Filters>
			</div>

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
