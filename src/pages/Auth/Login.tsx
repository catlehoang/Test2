import { Button, Card, FormLayout, TextField } from '@shopify/polaris';
import { useState } from 'react';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Card>
			<form className="p-4 md:min-w-[320px] w-full" onSubmit={() => console.log('Login')}>
				<FormLayout>
					<TextField value={email} onChange={(e) => setEmail(e)} label="Email" type="email" autoComplete="email" />
					<TextField value={password} onChange={(e) => setPassword(e)} label="Password" type="password" autoComplete="password" />
					<div className="flex justify-between"></div>
					<div className="flex justify-start">
						<Button submit>Login</Button>
					</div>
				</FormLayout>
			</form>
		</Card>
	);
};
