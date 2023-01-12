import { Button, ButtonGroup, Page } from '@shopify/polaris';
import { useState } from 'react';
import FormCreate from './FormCreate';
import { CreateProductRequest } from 'types/product';

const CreateProductPage = () => {
    const [product, setProduct] = useState<CreateProductRequest>();
	const handleSaveClick = () => {
		console.log(product);
	};

	return (
		<Page
			title="Create Product"
			breadcrumbs={[{ content: 'Product', url: '/product' }]}
			fullWidth
			secondaryActions={
				<ButtonGroup>
					<Button primary onClick={handleSaveClick}>
						Create
					</Button>
				</ButtonGroup>
			}
		>
            <FormCreate onChange={setProduct} />
		</Page>
	);
};

export default CreateProductPage;
