import { Button, DataTable, Badge, Link } from '@shopify/polaris';
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
	{ type: 'text', heading: 'Client name', field: 'client_name' },
	{ type: 'text', heading: 'Date ordered', field: 'date' }, //change type to date
	{ type: 'text', heading: 'Status', field: 'status' },
	{ type: 'text', heading: 'Action', field: 'action' },
];

const GridView = ({ data}: Props) => {
	const rows = useMemo(
		() =>
			(data || []).map((item, index) =>
				columns.map((column) => {
					if (column.field === 'status') {
						return <Badge status={item.status === 'available' ? 'success' : 'warning'}>{item.status}</Badge>
					}
					if (column.field === 'client_name') {
						return <Link url='/order/update'>{item.client_name}</Link>
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