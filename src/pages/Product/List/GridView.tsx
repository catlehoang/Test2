import { Button, DataTable, Badge } from '@shopify/polaris';
import { useMemo } from 'react';

type Props = {
	data?: any[];
	onDelete: (i: number) => void;
};

interface Column {
	type: 'text' | 'numeric';
	heading: React.ReactNode;
	sortable?: boolean;
	field: string;
}

const columns: Column[] = [
	{ type: 'numeric', heading: '#', field: 'id' },
	{ type: 'text', heading: 'Product', field: 'name' },
	//{ type: 'text', heading: 'Description', field: 'description'},
	{ type: 'text', heading: 'Status', field: 'status' },
	{ type: 'text', heading: 'Action', field: 'action' },
];
const GridView = ({ data, onDelete }: Props) => {
	const rows = useMemo(
		() =>
			(data || []).map((item, index) =>
				columns.map((column) => {
					if (column.field === 'status') {
						return <Badge status={item.status === 'available' ? 'success' : 'warning'}>{item.status}</Badge>
					}
					if (column.field === 'action') {
						return (
							<Button destructive onClick={() => onDelete(index)}>
								Delete
							</Button>
						);
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
