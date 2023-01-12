import { DataTable } from '@shopify/polaris';
import { useMemo } from 'react';

type Props = {
	data?: any[];
};

interface Column {
	type: 'text' | 'numeric';
	heading: React.ReactNode;
	sortable?: boolean;
	field: string;
}

const columns: Column[] = [
	{ type: 'numeric', heading: 'id', field: 'id' },
	{ type: 'text', heading: 'Product', field: 'name' },
	{ type: 'text', heading: 'Category', field: 'category' },
	{ type: 'text', heading: 'Description', field: 'description' },
];
const GridView = ({ data }: Props) => {
	const rows = useMemo(
		() =>
			(data || []).map((item) =>
				columns.map((column) => {
					return item[column.field as keyof typeof item] as string;
				})
			),
		[data]
	);

	return (
		<div className="mb-3">
			<div className="relative">
				<DataTable
					columnContentTypes={columns.map((item) => item.type)}
					headings={columns.map((item) => item.heading)}
					rows={rows}
					sortable={columns.map((item) => item.sortable || false)}
				/>
			</div>
			{/* {((data?.page || 0) > 1 || (data?.records || []).length >= listLimit) && (
				<div className="flex justify-end mt-3">
					<PageNavigation page={data?.page || 1} size={10} total={data?.count || 0} onChange={onChange} />
				</div>
			)} */}
		</div>
	);
};
export default GridView;
