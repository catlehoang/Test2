import { Button, Card, FormLayout, InlineError, TextField } from '@shopify/polaris';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const onLogin = () => {
		if (username === 'admin' && password === '123') {
			navigate('/dashboard');
		} else {
			setError('Wrong email or password');
		}
	};

	return (
		<Card>
			<form className="p-4 md:min-w-[320px] w-full" onSubmit={() => console.log('Login')}>
				<FormLayout>
					<TextField value={username} onChange={(e) => setUsername(e)} label="Username" type="text" autoComplete="username" />
					<TextField value={password} onChange={(e) => setPassword(e)} label="Password" type="password" autoComplete="password" />
					<div className="flex justify-between"></div>
					<div className="flex justify-start">
						<Button onClick={onLogin}>
							Login
						</Button>
					</div>
					<InlineError fieldID="1" message={error} />
				</FormLayout>
			</form>
		</Card>
	);
};
