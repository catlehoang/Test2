import { Modal, TextContainer } from '@shopify/polaris';
import { memo } from 'react';

type Props = {
	title: string;
	body?: string;
	active: boolean;
	primaryText?: string;
	seconadaryText?: string;
	loading?: boolean;
	handleChange: () => void;
	handleConfirm: () => void;
};

const Popup = (props: Props) => {
	return (
		<div>
			<Modal
				title={props.title}
				open={props.active}
				onClose={props.handleChange}
				loading={props.loading}
				primaryAction={{
					content: props.primaryText ?? 'Confirm',
					onAction: props.handleConfirm,
				}}
				secondaryActions={[
					{
						content: props.seconadaryText ?? 'Cancel',
						onAction: props.handleChange,
					},
				]}
			>
				<Modal.Section>
					<TextContainer>
						<p>{props.body}</p>
					</TextContainer>
				</Modal.Section>
			</Modal>
		</div>
	);
};

export default memo(Popup);
