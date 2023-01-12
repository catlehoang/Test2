import { Button, DataTable } from '@shopify/polaris';
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
	{ type: 'numeric', heading: '#', field: 'id' },
	{ type: 'text', heading: 'Material', field: 'name' },
	{ type: 'text', heading: 'Category', field: 'category' },
	{ type: 'numeric', heading: 'Quantity', field: 'quantity' },
];
const GridView = ({ data }: Props) => {
	const rows = useMemo(
		() =>
			(data || []).map((item) =>
				columns.map((column) => {
					if (column.field === 'quantity') {
						return item.quantity + ' item(s)';
					}
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
		</div>
	);
};
export default GridView;
