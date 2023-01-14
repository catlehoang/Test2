import { Spinner } from '@shopify/polaris';

type Props = {
	loading: boolean;
};

const Loading = (props: Props) => {
	return props.loading ? (
		<div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
			<Spinner />
		</div>
	) : null;
};

export default Loading;
