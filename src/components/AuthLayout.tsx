import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

export const UnAuthLayout = () => {
	return (
		<div className={clsx('flex flex-col items-center justify-center h-screen overflow-y-auto no-scrollbar')}>
			<div className="flex flex-col items-center">
				<div className="flex flex-col items-center">
					<h1 className="uppercase font-bold mt-2">Admin page</h1>
				</div>
				<div className="mt-4 flex md:flex-1 md:items-center md:justify-center">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
