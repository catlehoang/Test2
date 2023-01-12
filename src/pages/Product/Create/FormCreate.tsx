import { Card, FormLayout, Select, TextField } from '@shopify/polaris';
import { CreateProductRequest } from 'types/product';
import { useEffect, useState } from 'react';

type Props = {
	onChange: (product: CreateProductRequest) => void;
};

const FormCreate = (props: Props) => {
	const [name, setName] = useState<string>();
	const [category, setCategory] = useState<string>();
	const [description, setDescription] = useState<string>();
	const categories: any = [];

	if (categories.length === 0) {
		categories.push({ label: '--- Select category ---', value: '' });
		categories.push({ label: 'Environmental Testing Equipments', value: 'Environmental Testing Equipments' });
        categories.push({ label: 'Agricultural Testing Equipments', value: 'Agricultural Testing Equipments' });
		categories.push({ label: 'Special Instruments', value: 'Special Instruments' });
	}

	useEffect(() => {
        props.onChange({
			name: name || '',
			category: category || '',
			description: description,
		});
	}, [name, category, description]);

	return (
		<Card title="Stock Adjustment">
			<hr className="mt-3" />
			<Card.Section>
				<FormLayout>
					<FormLayout.Group condensed>
						<TextField value={name} onChange={(e) => setName(e)} label="Product Name" autoComplete="off" />
						<Select onChange={(e) => setCategory(e)} value={category} label="Type" options={categories} />
					</FormLayout.Group>
					<FormLayout.Group condensed>
						<TextField
							value={description}
							onChange={(e) => setDescription(e)}
							label="Description"
							multiline={4}
							autoComplete="off"
						/>
					</FormLayout.Group>
				</FormLayout>
			</Card.Section>
		</Card>
	);
};

export default FormCreate;
