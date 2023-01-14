/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Columns, FormLayout, TextField } from '@shopify/polaris';

type Props = {
	order?: any;
};

const FormEdit = ({ order }: Props) => {
	return (
		<>
			<Card title="Order">
				<hr className="mt-3" />
				<Card.Section>
					<FormLayout>
						<FormLayout.Group condensed>
							<TextField value={order?.client_name} label="Client name" disabled={true} autoComplete="off" />
							<TextField value={order?.date_order} label="Date order" disabled={true} autoComplete="off" />
						</FormLayout.Group>
						<FormLayout.Group condensed>
							<TextField type="date" label="Date of start" autoComplete="off" />
							<TextField type="date" label="Date of expected completion" autoComplete="off" />
							<TextField type="date" label="Date of expected delivery" autoComplete="off" />
						</FormLayout.Group>
					</FormLayout>
				</Card.Section>
			</Card>

			<Card title="List Product">
				<hr className="mt-3" />
				<Card.Section>
					<FormLayout>
						{order?.products.map((item: any, index: number) => {
							return (
								<FormLayout.Group key={index} condensed>
									<div className="flex items-start">
										<Columns columns={{ md: '2fr 0.5fr' }}>
											<TextField value={item.name} label="Name" disabled={true} autoComplete="off" />
											<TextField value={item.quantity} label="Quantity" disabled={true} autoComplete="off" />
										</Columns>
									</div>
								</FormLayout.Group>
							);
						})}
					</FormLayout>
					<br />
				</Card.Section>
			</Card>
		</>
	);
};

export default FormEdit;
